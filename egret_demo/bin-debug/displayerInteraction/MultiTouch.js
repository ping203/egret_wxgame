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
 * 多点触控demo
 *
 */
var MultiTouch = (function (_super) {
    __extends(MultiTouch, _super);
    function MultiTouch() {
        var _this = _super.call(this) || this;
        //多点触摸的位置集合
        _this.touchPoints = { names: [] };
        //位移
        _this.distance = 0;
        //当前的触控点个数
        _this.touchConn = 0;
        _this.defAngle = 0;
        _this.currentBirdRotation = 0;
        _this.c = 2 * Math.PI / 360;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    /**
     * 初始化
     */
    MultiTouch.prototype.init = function () {
        this.showBird = new egret.Bitmap();
        this.showBird.texture = RES.getRes('demo_pic_png');
        //设置锚点
        this.showBird.anchorOffsetX = this.showBird.width / 2;
        this.showBird.anchorOffsetY = this.showBird.height / 2;
        this.showBird.x = this.stage.stageWidth / 2;
        this.showBird.y = this.stage.stageHeight / 2;
        this.showBird.touchEnabled = true;
        this.addChild(this.showBird);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);
    };
    /**
     * 手指按下
     */
    MultiTouch.prototype.touchDown = function (event) {
        console.log('touch id:', +event.touchPointID);
        if (this.touchPoints[event.touchPointID] == null) {
            this.touchPoints[event.touchPointID] = new egret.Point(event.stageX, event.stageY);
            this.touchPoints["names"].push(event.touchPointID);
        }
        this.touchConn++;
        if (this.touchConn == 2) {
            this.distance = this.getInstance();
            console.log('查看下distance:' + this.distance);
            this.defAngle = this.getDefAngle();
            console.log('查看下手指触摸的角度:' + this.defAngle);
            console.log('查看下小鸟的旋转角度:' + this.showBird.rotation);
        }
    };
    /**
     * 手指移动
     */
    MultiTouch.prototype.touchMove = function (event) {
    };
    /**
     * 手指抬起
     */
    MultiTouch.prototype.touchUp = function (event) {
    };
    /**
     * 获取位移值
     */
    MultiTouch.prototype.getInstance = function () {
        var distance = 0;
        var names = this.touchPoints["names"];
        //获取到两个触控点的位移距离
        distance = egret.Point.distance(this.touchPoints[names[names.length - 1]], this.touchPoints[names[names.length - 2]]);
        return distance;
    };
    /**
     * 获取角度值
     */
    MultiTouch.prototype.getDefAngle = function () {
        var angle;
        var names = this.touchPoints['names'];
        var p1 = this.touchPoints[names[names.length - 1]];
        var p2 = this.touchPoints[names[names.length - 2]];
        angle = Math.atan2(p1.y - p2.y, p1.x - p2.x) / this.c;
        return angle;
    };
    return MultiTouch;
}(egret.DisplayObjectContainer));
__reflect(MultiTouch.prototype, "MultiTouch");
//# sourceMappingURL=MultiTouch.js.map