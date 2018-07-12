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
    return ViewUtils;
}());
__reflect(ViewUtils.prototype, "ViewUtils");
//# sourceMappingURL=ViewUtils.js.map