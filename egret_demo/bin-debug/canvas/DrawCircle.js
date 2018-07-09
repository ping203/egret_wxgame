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
 * 画圆
 */
var DrawCircle = (function (_super) {
    __extends(DrawCircle, _super);
    function DrawCircle() {
        var _this = _super.call(this) || this;
        _this.shape = new egret.Shape();
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    /**
     * 初始化
     */
    DrawCircle.prototype.init = function () {
        var _this = this;
        var shape = this.shape;
        this.addChild(shape);
        this.drawCircle(this.stage.stageWidth / 2, this.stage.stageHeight / 2);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (event) {
            _this.drawCircle(event.stageX, event.stageY);
        }, this);
    };
    /**
     * 画圆形
     */
    DrawCircle.prototype.drawCircle = function (x, y) {
        var shape = this.shape;
        shape.graphics.beginFill(0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100), 1);
        shape.graphics.lineStyle(2, 0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100));
        shape.graphics.drawCircle(x, y, Math.random() * 50 + 50);
        shape.graphics.endFill();
    };
    return DrawCircle;
}(egret.DisplayObjectContainer));
__reflect(DrawCircle.prototype, "DrawCircle");
//# sourceMappingURL=DrawCircle.js.map