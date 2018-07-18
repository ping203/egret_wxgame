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
        _this.once(egret.Event.REMOVED_FROM_STAGE, _this.removeMainStage, _this);
        return _this;
    }
    /**
     * 初始化
     */
    MainGame.prototype.init = function () {
        this.btnStartGame = new egret.Bitmap();
        this.btnStartGame.texture = RES.getRes("startgame_png");
        this.addChild(this.btnStartGame);
        this.btnStartGame.x = GlobalData.GameStageWidth - this.btnStartGame.width - 50;
        this.btnStartGame.y = GlobalData.GameStageHeight - this.btnStartGame.height - 50;
        var tw = egret.Tween.get(this.btnStartGame, { loop: true });
        var oldY = this.btnStartGame.y;
        tw.to({ y: this.btnStartGame.y + 20 }, 500).to({ y: oldY }, 500).wait(100).call(function () {
        }, this);
    };
    /**
     * 移除舞台的监听
     */
    MainGame.prototype.removeMainStage = function () {
        console.log('移除了主界面');
    };
    return MainGame;
}(eui.Component));
__reflect(MainGame.prototype, "MainGame");
//# sourceMappingURL=MainGame.js.map