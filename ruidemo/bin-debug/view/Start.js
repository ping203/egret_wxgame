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
var Start = (function (_super) {
    __extends(Start, _super);
    function Start() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    /**
     * 初始化
     */
    Start.prototype.init = function () {
        this.bgBitmap = new egret.Bitmap();
        this.bgBitmap.texture = RES.getRes('main_bg_png');
        this.bgBitmap.x = 0;
        this.bgBitmap.y = 0;
        this.anchorOffsetX = GlobalData.GameStageWidth / 2;
        this.anchorOffsetY = GlobalData.GameStageHeight / 2;
        this.bgBitmap.width = 0;
        this.bgBitmap.height = 0;
        this.addChild(this.bgBitmap);
    };
    return Start;
}(egret.DisplayObjectContainer));
__reflect(Start.prototype, "Start");
//# sourceMappingURL=Start.js.map