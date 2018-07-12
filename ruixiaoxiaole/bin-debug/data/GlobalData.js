var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 游戏的全局变量数据
 */
var GlobalData = (function () {
    function GlobalData() {
    }
    //主舞台的宽度
    GlobalData.GameStageWidth = 640;
    //主舞台的高度
    GlobalData.GameStageHeight = 960;
    //游戏当前的版本号
    GlobalData.version = 201807121019;
    return GlobalData;
}());
__reflect(GlobalData.prototype, "GlobalData");
//# sourceMappingURL=GlobalData.js.map