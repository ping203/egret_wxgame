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
 * 容器的使用
 */
var UseContainer = (function (_super) {
    __extends(UseContainer, _super);
    function UseContainer() {
        var _this = _super.call(this) || this;
        //左右容器是否可以滑动
        _this.leftDrag = false;
        _this.rightDrag = false;
        _this.leftOffsetX = 0;
        _this.leftOffsetY = 0;
        _this.rightOffsetX = 0;
        _this.rightOffsetY = 0;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    UseContainer.prototype.init = function () {
        var _this = this;
        //先初始化两个矩形框以及矩形框上面的提示信息
        //两个按钮
        this.leftBtn = new egret.TextField();
        this.leftBtn.size = 28;
        this.leftBtn.textAlign = egret.HorizontalAlign.CENTER;
        this.leftBtn.textColor = 0xffffff;
        this.leftBtn.background = true;
        this.leftBtn.backgroundColor = 0xd71345;
        this.leftBtn.x = this.stage.stageWidth / 4 - this.leftBtn.width / 2;
        this.leftBtn.y = 120;
        this.leftBtn.touchEnabled = true;
        this.leftBtn.text = '红色容器';
        this.addChild(this.leftBtn);
        this.rightBtn = new egret.TextField();
        this.rightBtn.size = 28;
        this.rightBtn.textAlign = egret.HorizontalAlign.CENTER;
        this.rightBtn.textColor = 0xffffff;
        this.rightBtn.background = true;
        this.rightBtn.backgroundColor = 0x0094ff;
        this.rightBtn.x = this.stage.stageWidth / 2 + this.stage.stageWidth / 4 - this.rightBtn.width / 2;
        this.rightBtn.y = 120;
        this.rightBtn.touchEnabled = true;
        this.rightBtn.text = '蓝色容器';
        this.addChild(this.rightBtn);
        //初始化两个容器
        this.leftContainer = new egret.DisplayObjectContainer();
        this.addChild(this.leftContainer);
        this.leftRect = new egret.Shape();
        this.leftRect.graphics.lineStyle(10, 0xd71345);
        this.leftRect.graphics.moveTo(0, 0);
        this.leftRect.graphics.lineTo(200, 0);
        this.leftRect.graphics.lineTo(200, 300);
        this.leftRect.graphics.lineTo(0, 300);
        this.leftRect.graphics.lineTo(0, 0);
        this.leftRect.graphics.endFill();
        // this.addChild(this.leftRect);
        this.leftContainer.addChild(this.leftRect);
        this.leftContainer.x = 40;
        this.leftContainer.y = 200;
        this.rightContainer = new egret.DisplayObjectContainer();
        this.addChild(this.rightContainer);
        this.rightRect = new egret.Shape();
        this.rightRect.graphics.lineStyle(10, 0x102b6a);
        this.rightRect.graphics.moveTo(0, 0);
        this.rightRect.graphics.lineTo(200, 0);
        this.rightRect.graphics.lineTo(200, 300);
        this.rightRect.graphics.lineTo(0, 300);
        this.rightRect.graphics.lineTo(0, 0);
        this.rightRect.graphics.endFill();
        this.rightContainer.addChild(this.rightRect);
        this.rightContainer.x = 350;
        this.rightContainer.y = 200;
        //添加小鸟
        this.showBitmap = new egret.Bitmap();
        this.showBitmap.texture = RES.getRes('demo_pic_png');
        this.showBitmap.x = 80;
        this.showBitmap.y = 540;
        this.addChild(this.showBitmap);
        //左边按钮点击事件，将小鸟放进容器中
        this.leftBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            if (_this.getChildIndex(_this.showBitmap) != -1) {
                //小鸟不在容器内，并且小鸟在舞台
                _this.removeChild(_this.showBitmap);
                _this.leftContainer.addChild(_this.showBitmap);
                _this.showBitmap.x = (_this.leftContainer.width - _this.showBitmap.width) / 2;
                _this.showBitmap.y = 20;
            }
            else if (_this.rightContainer.getChildIndex(_this.showBitmap) != -1) {
                _this.rightContainer.removeChild(_this.showBitmap);
                _this.leftContainer.addChild(_this.showBitmap);
                _this.showBitmap.x = (_this.leftContainer.width - _this.showBitmap.width) / 2;
                _this.showBitmap.y = 20;
            }
            _this.leftContainer.touchEnabled = true;
            _this.rightContainer.touchEnabled = false;
        }, this);
        //点击右边按钮将小鸟放进容器中
        this.rightBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            if (_this.getChildIndex(_this.showBitmap) != -1) {
                _this.removeChild(_this.showBitmap);
                _this.rightContainer.addChild(_this.showBitmap);
                _this.showBitmap.x = (_this.rightContainer.width - _this.showBitmap.width) / 2;
                _this.showBitmap.y = 20;
            }
            else if (_this.leftContainer.getChildIndex(_this.showBitmap) != -1) {
                _this.leftContainer.removeChild(_this.showBitmap);
                _this.rightContainer.addChild(_this.showBitmap);
                _this.showBitmap.x = (_this.rightContainer.width - _this.showBitmap.width) / 2;
                _this.showBitmap.y = 20;
            }
            _this.leftContainer.touchEnabled = false;
            _this.rightContainer.touchEnabled = true;
        }, this);
        this.leftContainer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (event) {
            _this.leftDrag = true;
            console.log('手指按下的x:', event.stageX);
            console.log('左边容器的的x:', _this.leftContainer.x);
            _this.leftOffsetX = event.stageX - _this.leftContainer.x;
            _this.leftOffsetY = event.stageY - _this.leftContainer.y;
        }, this);
        this.rightContainer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (event) {
            _this.rightDrag = true;
            _this.rightOffsetX = event.stageX - _this.rightContainer.x;
            _this.rightOffsetY = event.stageY - _this.rightContainer.y;
        }, this);
        this.leftContainer.addEventListener(egret.TouchEvent.TOUCH_END, function (event) {
            _this.leftDrag = false;
        }, this);
        this.rightContainer.addEventListener(egret.TouchEvent.TOUCH_END, function (event) {
            _this.rightDrag = false;
        }, this);
        //触摸移动左边容器
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (event) {
            if (_this.leftDrag) {
                console.log(event.stageX - _this.leftOffsetX);
                _this.leftContainer.x = event.stageX - _this.leftOffsetX;
                _this.leftContainer.y = event.stageY - _this.leftOffsetY;
            }
        }, this);
        //触摸移动右边容器
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (event) {
            if (_this.rightDrag) {
                console.log(event.stageX);
                _this.rightContainer.x = event.stageX - _this.rightOffsetX;
                _this.rightContainer.y = event.stageY - _this.rightOffsetY;
            }
        }, this);
    };
    return UseContainer;
}(egret.DisplayObjectContainer));
__reflect(UseContainer.prototype, "UseContainer");
//# sourceMappingURL=UsrContainer.js.map