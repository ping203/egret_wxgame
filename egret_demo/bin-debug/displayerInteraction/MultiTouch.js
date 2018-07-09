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
        _this.defAngle = 0;
        _this.currentBirdRotation = 0;
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
    return MultiTouch;
}(egret.DisplayObjectContainer));
__reflect(MultiTouch.prototype, "MultiTouch");
//# sourceMappingURL=MultiTouch.js.map