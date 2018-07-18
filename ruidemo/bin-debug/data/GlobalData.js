var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GlobalData = (function () {
    function GlobalData() {
    }
    //主舞台的宽度
    GlobalData.GameStageWidth = 750;
    //主舞台的高度
    GlobalData.GameStageHeight = 1334;
    //游戏当前的版本号
    GlobalData.version = 201807181736;
    return GlobalData;
}());
__reflect(GlobalData.prototype, "GlobalData");
//# sourceMappingURL=GlobalData.js.map