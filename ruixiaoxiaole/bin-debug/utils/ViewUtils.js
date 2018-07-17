var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ViewUtils = (function () {
    function ViewUtils() {
    }
    /**
     * 将view置于舞台的正中央
     */
    ViewUtils.setCenter = function (view) {
        view.x = (GlobalData.GameStage.stageWidth - view.width) / 2;
        view.y = (GlobalData.GameStage.stageHeight - view.height) / 2;
    };
    ViewUtils.getShape = function (width, height, color, alpha) {
        if (width === void 0) { width = 640; }
        if (height === void 0) { height = 960; }
        if (color === void 0) { color = 0x000000; }
        if (alpha === void 0) { alpha = 0.7; }
        var shp = new egret.Shape();
        shp.graphics.beginFill(color, alpha);
        shp.graphics.drawRect(0, 0, width, height);
        shp.graphics.endFill();
        shp.touchEnabled = false;
        return shp;
    };
    return ViewUtils;
}());
__reflect(ViewUtils.prototype, "ViewUtils");
//# sourceMappingURL=ViewUtils.js.map