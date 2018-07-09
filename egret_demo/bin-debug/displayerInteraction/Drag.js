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
 * 拖拽交互
 *
 */
var Drag = (function (_super) {
    __extends(Drag, _super);
    function Drag() {
        var _this = _super.call(this) || this;
        //手指按下时,该值为true
        _this.touchStatus = false;
        //手指按下时,手指全局坐标与小鸟图片的位置差
        _this.touchPoint = new egret.Point();
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    /**
     * 初始化
     */
    Drag.prototype.init = function () {
        this.showBitmap = new egret.Bitmap();
        this.showBitmap.texture = RES.getRes('demo_pic_png');
        this.showBitmap.x = this.stage.stageWidth / 2;
        this.showBitmap.y = this.stage.stageHeight / 2;
        this.showBitmap.touchEnabled = true;
        this.addChild(this.showBitmap);
        this.showBitmap.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this.showBitmap.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
    };
    /**
     * 手指按下
     */
    Drag.prototype.mouseDown = function (event) {
        console.log('手指按下');
        this.touchStatus = true;
        this.touchPoint.x = event.stageX - this.showBitmap.x;
        this.touchPoint.y = event.stageY - this.showBitmap.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
    };
    /**
     * 手指移动的回调
     */
    Drag.prototype.onMove = function (event) {
        if (this.touchStatus) {
            console.log('点妈耶x:' + event.stageX, 'y:' + event.stageY);
            this.showBitmap.x = event.stageX - this.touchPoint.x;
            this.showBitmap.y = event.stageY - this.touchPoint.y;
        }
    };
    /**
     * 手指起来
     */
    Drag.prototype.mouseUp = function (event) {
        this.touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
    };
    return Drag;
}(egret.DisplayObjectContainer));
__reflect(Drag.prototype, "Drag");
//# sourceMappingURL=Drag.js.map