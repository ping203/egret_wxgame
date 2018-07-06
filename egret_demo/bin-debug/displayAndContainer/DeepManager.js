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
 * 深度管理
 */
var DeepManager = (function (_super) {
    __extends(DeepManager, _super);
    function DeepManager() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    DeepManager.prototype.init = function () {
        var _this = this;
        this.leftBitmap = new egret.Bitmap();
        this.middleBitmap = new egret.Bitmap();
        this.RightBitmap = new egret.Bitmap();
        this.leftBitmap.texture = RES.getRes('demo_pic_png');
        this.middleBitmap.texture = RES.getRes('demo_pic_png');
        this.RightBitmap.texture = RES.getRes('demo_pic_png');
        this.leftBitmap.x = 50,
            this.leftBitmap.y = this.stage.stageHeight / 2 - this.leftBitmap.height / 2;
        this.leftBitmap.touchEnabled = true;
        this.leftBitmap.pixelHitTest = true;
        this.addChild(this.leftBitmap);
        this.middleBitmap.x = 130;
        this.middleBitmap.y = this.stage.stageHeight / 2 - this.middleBitmap.height / 2;
        this.middleBitmap.touchEnabled = true;
        this.middleBitmap.pixelHitTest = true;
        this.addChild(this.middleBitmap);
        this.RightBitmap.x = this.stage.stageWidth / 2 - this.middleBitmap.width / 2 - 30;
        this.RightBitmap.y = this.stage.stageHeight / 2 - this.RightBitmap.height / 2;
        this.RightBitmap.touchEnabled = true;
        this.RightBitmap.pixelHitTest = true;
        this.addChild(this.RightBitmap);
        this.leftBitmap.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            _this.setChildIndex(_this.leftBitmap, _this.numChildren - 1);
        }, this);
        this.middleBitmap.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            _this.setChildIndex(_this.middleBitmap, _this.numChildren - 1);
        }, this);
        this.RightBitmap.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            _this.setChildIndex(_this.RightBitmap, _this.numChildren - 1);
        }, this);
    };
    return DeepManager;
}(egret.DisplayObjectContainer));
__reflect(DeepManager.prototype, "DeepManager");
//# sourceMappingURL=DeepManager.js.map