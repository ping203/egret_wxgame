/**
 * 碰撞检测
 * 碰撞检测分为两种模式,一种是对显示对象所在的矩形包围盒进行检测
 * 一种是对其透明度不为零的区域进行检测
 *
 * Graphics矢量绘图
 * Graphics类中封装的绘图方法不能直接使用,而需要在显示对象中使用。一些显示对象(如shape和Sprite)中
 * 已经包含了绘图方法,因此可以在显示对象中直接调用这些方法进行绘图
 *
 * drawRect 画矩形
 * beginFill(0x000000,1) 设置矩形的填充颜色,接收2个参数,颜色值以及透明度值
 * drawRect(0,0,100,100) 设置矩形的大小
 * endFill() 结束当前绘制操作
 * lineStyle(10，0x000000)边框绘制  接收边框宽度以及颜色值
 *
 * drawCircle 画圆
 * drawCircle(x,y,radius)接收三个参数,圆的坐标以及半径
 *
 * drawLine 画直线
 * moveTo(x:number,y:number):void  线条起点
 * LineTo(x:number,y:number):void  线条终点
 * lineStyle(2,0x00ff00) 制定线条的样式
 *
 * 绘制曲线
 * egret提供的曲线绘制是'二次贝塞尔曲线'
 * curveTo(x1:number,y1:number,x2:number,y1:number):void
 * 前两个参数是控制点p1的位置,后两个参数是终点p2的位置
 * 执行绘图时,先使用moveTo()方法指定曲线的起始点,然后使用curveTo()指定曲线的控制点以及终点
 *
 * 绘制圆弧
 * drawArc()
 * drawArc(x:number,y:number,raduis:number,startAngle:number,endAngle:number,anticlockwise:boolean):void
 * 前两个参数是圆弧路径的圆心位置,raduis是圆弧半径,startAngle是圆弧起点的角度,从x轴方向开始计算,以弧度为单位
 * endAngle是圆弧终点的角度,anticlockwise控制绘制方向,如果为true,逆时针绘制圆弧,反之顺时针绘制
 *
 *
 * 绘制圆弧的高级使用
 *
 *
 *
 * 清空绘图
 * xx.graphics.clwar()
 *
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 碰撞检测
 * hitTestPOint(x:number,y:number)
 * x,y是待检测点的位置,如果发生碰撞,则方法返回true,否则返回true
 */
var ImpackCheck = (function (_super) {
    __extends(ImpackCheck, _super);
    function ImpackCheck() {
        var _this = _super.call(this) || this;
        //触摸的状态,初始化为未触摸状态
        _this.touchStatus = TouchCollideStatus.NO_TOUCHED;
        //检测模式 (矩形包围盒,像素检测)
        _this.isCheckShape = false;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    /**
     * 初始化
     */
    ImpackCheck.prototype.init = function (event) {
        //显示图片
        this.showBitmap = new egret.Bitmap();
        this.showBitmap.texture = RES.getRes('demo_pic_png');
        this.showBitmap.x = this.stage.stageWidth / 2;
        this.showBitmap.y = this.stage.stageHeight / 2;
        this.showBitmap.anchorOffsetX = this.showBitmap.width / 2;
        this.showBitmap.anchorOffsetY = this.showBitmap.height / 2;
        this.addChild(this.showBitmap);
        //小圆点,用于提示用户按下的位置
        this.touchDot = new egret.Shape();
        this.touchDot.graphics.beginFill(0x0094ff);
        this.touchDot.graphics.drawCircle(0, 0, 20);
        this.touchDot.graphics.endFill();
        // this.addChild(this.touchDot);
        //提示信息
        this.showMsg = new egret.TextField();
        this.addChild(this.showMsg);
        this.showMsg.size = 28;
        this.showMsg.x = 100;
        this.showMsg.y = 100;
        this.showMsg.textAlign = egret.HorizontalAlign.CENTER;
        this.showMsg.textColor = 0x000000;
        this.showMsg.type = egret.TextFieldType.DYNAMIC;
        this.showMsg.lineSpacing = 6;
        this.showMsg.multiline = true;
        this.showMsg.touchEnabled = true;
        //提示信息区域的点击事件
        this.showMsg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
        }, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this);
        // //小圆点跟随着手指滑动
        // this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,(event:egret.TouchEvent)=>{
        //     this.touchDot.x=event.localX;
        //     this.touchDot.y=event.localY;
        // },this);
        this.updateTxtInfo(TouchCollideStatus.NO_TOUCHED);
    };
    /**
     * 触摸事件监听
     */
    ImpackCheck.prototype.touchHandler = function (event) {
        switch (event.type) {
            //开始触摸
            case egret.TouchEvent.TOUCH_BEGIN:
                //检查触摸位置是否是文本区域
                if (this.showMsg.hitTestPoint(event.stageX, event.stageY)) {
                    console.log('触摸到了文本区域');
                }
                else {
                    console.log('没有触摸到了文本区域');
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchHandler, this);
                    this.stage.once(egret.TouchEvent.TOUCH_END, this.touchHandler, this);
                    this.addChild(this.touchDot);
                    this.checkImpact(event.stageX, event.$stageY);
                }
                this.updateTxtInfo(this.touchStatus);
                break;
            //触摸移动过程
            case egret.TouchEvent.TOUCH_MOVE:
                console.log('摸摸摸摸');
                this.checkImpact(event.stageX, event.$stageY);
                break;
            case egret.TouchEvent.TOUCH_END:
                console.log('触摸结束');
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchHandler, this);
                if (this.touchDot.parent) {
                    this.touchDot.parent.removeChild(this.touchDot);
                }
                this.updateTxtInfo(this.touchStatus);
                break;
        }
    };
    /**
     * 检查是否碰撞
     */
    ImpackCheck.prototype.checkImpact = function (x, y) {
        var isImpact = this.showBitmap.hitTestPoint(x, y, this.isCheckShape);
        this.touchDot.x = x;
        this.touchDot.y = y;
        this.updateTxtInfo(isImpact ? TouchCollideStatus.COLLIDED : TouchCollideStatus.TOUCHED_NO_COLLIDED);
    };
    /**
     * 更新文本的信息
     */
    ImpackCheck.prototype.updateTxtInfo = function (isStatus) {
        this.showMsg.text = "碰撞检测结果:" + (['放上手指', '移动中', '碰撞了'][isStatus])
            + "\n碰撞检测模式:" + (this.isCheckShape ? "矩形包围盒" : "像素检测");
    };
    return ImpackCheck;
}(egret.DisplayObjectContainer));
__reflect(ImpackCheck.prototype, "ImpackCheck");
var TouchCollideStatus = (function () {
    function TouchCollideStatus() {
    }
    //未触摸状态
    TouchCollideStatus.NO_TOUCHED = 0;
    //触摸了但未碰撞状态
    TouchCollideStatus.TOUCHED_NO_COLLIDED = 1;
    //以碰撞状态
    TouchCollideStatus.COLLIDED = 2;
    return TouchCollideStatus;
}());
__reflect(TouchCollideStatus.prototype, "TouchCollideStatus");
//# sourceMappingURL=ImpactCheck.js.map