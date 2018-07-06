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
 * 添加与删除显示对象
 */
var AddAndDelDisplay = (function (_super) {
    __extends(AddAndDelDisplay, _super);
    function AddAndDelDisplay() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    /**
     * 初始化
     */
    AddAndDelDisplay.prototype.init = function (event) {
        var _this = this;
        //将屏幕划分为4个区域
        this.upLeft = new egret.Shape();
        this.upRight = new egret.Shape();
        this.downLeft = new egret.Shape();
        this.downRight = new egret.Shape();
        this.upLeft.graphics.beginFill(0xf7acbc);
        this.upLeft.graphics.drawRect(0, 0, this.stage.stageWidth / 2, this.stage.stageHeight / 2);
        this.upLeft.graphics.endFill();
        this.upLeft.x = 0;
        this.upLeft.y = 0;
        this.upLeft.touchEnabled = true;
        this.addChild(this.upLeft);
        this.upRight = new egret.Shape();
        this.upRight.graphics.beginFill(0xdeab8a);
        this.upRight.graphics.drawRect(0, 0, this.stage.stageWidth / 2, this.stage.stageHeight / 2);
        this.upRight.graphics.endFill();
        this.upRight.x = this.stage.stageWidth / 2;
        this.upRight.y = 0;
        this.upRight.touchEnabled = true;
        this.addChild(this.upRight);
        this.downLeft = new egret.Shape();
        this.downLeft.graphics.beginFill(0xef5b9c);
        this.downLeft.graphics.drawRect(0, 0, this.stage.stageWidth / 2, this.stage.stageHeight / 2);
        this.downLeft.graphics.endFill();
        this.downLeft.x = 0;
        this.downLeft.y = this.stage.stageHeight / 2;
        this.downLeft.touchEnabled = true;
        this.addChild(this.downLeft);
        this.downRight = new egret.Shape();
        this.downRight.graphics.beginFill(0x0094ff);
        this.downRight.graphics.drawRect(0, 0, this.stage.stageWidth / 2, this.stage.stageHeight / 2);
        this.downRight.graphics.endFill();
        this.downRight.x = this.stage.stageWidth / 2;
        this.downRight.y = this.stage.stageHeight / 2;
        this.downRight.touchEnabled = true;
        this.addChild(this.downRight);
        //初始化四只小鸟
        this.upLeftBird = new egret.Bitmap();
        this.upLeftBird.texture = RES.getRes('demo_pic_png');
        this.upLeftBird.x = this.upLeft.x + (this.upLeft.width / 2 - this.upLeftBird.width / 2);
        this.upLeftBird.y = (this.upLeft.height - this.upLeftBird.height) / 2;
        this.addChild(this.upLeftBird);
        this.upRightBird = new egret.Bitmap();
        this.upRightBird.texture = RES.getRes('demo_pic_png');
        this.upRightBird.x = this.upRight.x + (this.upRight.width - this.upRightBird.width) / 2;
        this.upRightBird.y = (this.upRight.height - this.upRightBird.height) / 2;
        this.addChild(this.upRightBird);
        this.downLeftBird = new egret.Bitmap();
        this.downLeftBird.texture = RES.getRes('demo_pic_png');
        this.downLeftBird.x = (this.downLeft.width - this.downLeftBird.width) / 2;
        this.downLeftBird.y = this.downLeft.height + (this.downLeft.height - this.downLeftBird.height) / 2;
        this.addChild(this.downLeftBird);
        this.downRightBird = new egret.Bitmap();
        this.downRightBird.texture = RES.getRes('demo_pic_png');
        this.downRightBird.x = this.downRight.width + (this.downRight.width - this.downRightBird.width) / 2;
        this.downRightBird.y = this.downRight.height + (this.downRight.height - this.downRightBird.height) / 2;
        this.addChild(this.downRightBird);
        this.upLeft.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            if (_this.contains(_this.upLeftBird)) {
                _this.removeChild(_this.upLeftBird);
            }
            else {
                _this.addChild(_this.upLeftBird);
            }
        }, this);
        this.upRight.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            if (_this.contains(_this.upRightBird)) {
                _this.removeChild(_this.upRightBird);
            }
            else {
                _this.addChild(_this.upRightBird);
            }
        }, this);
        this.downLeft.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            if (_this.contains(_this.downLeftBird)) {
                _this.removeChild(_this.downLeftBird);
            }
            else {
                _this.addChild(_this.downLeftBird);
            }
        }, this);
        this.downRight.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.contains(_this.downRightBird)) {
                _this.removeChild(_this.downRightBird);
            }
            else {
                _this.addChild(_this.downRightBird);
            }
        }, this);
    };
    return AddAndDelDisplay;
}(egret.DisplayObjectContainer));
__reflect(AddAndDelDisplay.prototype, "AddAndDelDisplay");
//# sourceMappingURL=AddAndDelDisplay.js.map