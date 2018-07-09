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
 * 画圆弧
 * 基于画弧api,实现圆形遮罩功能
 *
 */
var DrawArc = (function (_super) {
    __extends(DrawArc, _super);
    function DrawArc() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    /**
     * 初始化
     */
    DrawArc.prototype.init = function () {
        this.maskShape = new egret.Shape();
        this.showBitmap = new egret.Bitmap();
        this.showBitmap.texture = RES.getRes('demo_pic_png');
        this.addChild(this.showBitmap);
        this.showBitmap.x = this.stage.stageWidth / 2 - 100;
        this.showBitmap.y = this.stage.stageHeight / 2 - 100;
        this.showBitmap.mask = this.maskShape;
        //开始动态绘制圆弧
        var shape = this.maskShape;
        var angle = 0;
        var i = 1;
        egret.startTick(function (timeStamp) {
            changeAngle(angle);
            angle += 1;
            if (angle >= 360) {
                angle = angle % 360;
                i *= -1;
            }
            return false;
        }, this);
        /**
         * 动态的改变角度
         */
        function changeAngle(angle) {
            shape.graphics.clear();
            shape.graphics.beginFill(0x0094ff, 1);
            shape.graphics.moveTo(0, 0);
            shape.graphics.lineTo(200, 0);
            shape.graphics.drawArc(0, 0, 200, 0, angle * Math.PI / 180, i == -1);
            shape.graphics.lineTo(0, 0);
            shape.graphics.endFill();
        }
    };
    /**
     * 初始化画板
     */
    DrawArc.prototype.initGraphics = function () {
    };
    return DrawArc;
}(egret.DisplayObjectContainer));
__reflect(DrawArc.prototype, "DrawArc");
//# sourceMappingURL=DrawArc.js.map