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
        this.besselShape.graphics.moveTo(140, 100);
        this.besselShape.graphics.curveTo(340, 200, 480, 500);
    };
    return BesselCanvas;
}(egret.DisplayObjectContainer));
__reflect(BesselCanvas.prototype, "BesselCanvas");
//# sourceMappingURL=BesselCanvas.js.map