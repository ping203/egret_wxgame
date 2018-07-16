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
 * 游戏加载之前的UI显示
 * 用于提高用户体验
 *
 */
var PreLoadingUI = (function (_super) {
    __extends(PreLoadingUI, _super);
    function PreLoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    PreLoadingUI.prototype.createView = function () {
        this.preLoadingBg = new egret.Bitmap();
        this.preLoadingBg.texture = RES.getRes('logo_png');
        this.addChild(this.preLoadingBg);
        ViewUtils.setCenter(this.preLoadingBg);
    };
    return PreLoadingUI;
}(egret.Sprite));
__reflect(PreLoadingUI.prototype, "PreLoadingUI");
//# sourceMappingURL=PreLoadingUI.js.map