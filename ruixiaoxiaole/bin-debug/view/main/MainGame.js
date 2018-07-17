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
 * 游戏主界面
 */
var MainGame = (function (_super) {
    __extends(MainGame, _super);
    function MainGame() {
        var _this = _super.call(this) || this;
        _this.skinName = 'MainGameSkin';
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    /**
     * 初始化
     */
    MainGame.prototype.init = function () {
    };
    return MainGame;
}(eui.Component));
__reflect(MainGame.prototype, "MainGame");
//# sourceMappingURL=MainGame.js.map