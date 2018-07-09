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
 * 贝塞尔曲线的绘制
 */
var BesselCanvas = (function (_super) {
    __extends(BesselCanvas, _super);
    function BesselCanvas() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    /**
     * 初始化
     */
    BesselCanvas.prototype.init = function () {
        this.besselShape = new egret.Shape();
        this.addChild(this.besselShape);
        //绘制贝塞尔曲线
        this.besselShape.graphics.lineStyle(3, 0xff0ff0);
        this.besselShape.graphics.moveTo(140, 400);
        this.besselShape.graphics.curveTo(340, 200, 480, 500);
        //绘制三个控制点
        this.startPoint = this.initShape(140, 400, 0xffff00);
        this.controllPoint = this.initShape(340, 200, 0xff0000);
        this.anchorPoint = this.initShape(480, 500, 0x000ff0);
        //将三个控制点添加进面板
        this.addChild(this.startPoint);
        this.addChild(this.controllPoint);
        this.addChild(this.anchorPoint);
    };
    BesselCanvas.prototype.initShape = function (x, y, color) {
        var shape = new egret.Shape();
        shape.graphics.beginFill(color);
        shape.graphics.drawCircle(0, 0, 20);
        shape.graphics.endFill();
        shape.x = x;
        shape.y = y;
        shape.touchEnabled = true;
        shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginTouchHandler, this);
        return shape;
    };
    /**
     * 开始触摸事件
     */
    BesselCanvas.prototype.onBeginTouchHandler = function (event) {
        //阻止对事件流中当前节点中和所有后续节点中的事件侦听器进行处理，该方法立即生效
        event.stopImmediatePropagation();
        //获取当前正在拖动的shape
        this.currentShape = event.currentTarget;
        this.currentShape.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginTouchHandler, this);
        this.currentShape.touchEnabled = false;
        //对舞台添加监听事件，来动态移动shape
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoveHandler, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEndHandler, this);
    };
    /**
     * 触摸过程中的移动事件
     */
    BesselCanvas.prototype.onMoveHandler = function (event) {
        this.currentShape.x = event.stageX;
        this.currentShape.y = event.stageY;
        this.resetCurr();
    };
    /**
     * 结束触摸事件
     */
    BesselCanvas.prototype.onEndHandler = function (event) {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoveHandler, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEndHandler, this);
        this.currentShape.touchEnabled = true;
        this.currentShape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginTouchHandler, this);
    };
    /**
     * 重置贝塞尔曲线
     */
    BesselCanvas.prototype.resetCurr = function () {
        var cureShape = this.besselShape;
        cureShape.graphics.clear();
        cureShape.graphics.lineStyle(3, 0xff0ff0);
        cureShape.graphics.moveTo(this.startPoint.x, this.startPoint.y);
        cureShape.graphics.curveTo(this.controllPoint.x, this.controllPoint.y, this.anchorPoint.x, this.anchorPoint.y);
    };
    return BesselCanvas;
}(egret.DisplayObjectContainer));
__reflect(BesselCanvas.prototype, "BesselCanvas");
//# sourceMappingURL=BesselCanvas.js.map