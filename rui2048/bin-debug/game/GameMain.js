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
 * 游戏的主场景类
 *
 */
var GameMain = (function (_super) {
    __extends(GameMain, _super);
    /**
     * 构造函数
     */
    function GameMain() {
        var _this = _super.call(this) || this;
        _this.skinName = 'Game2048Skin';
        GameMain.self = _this;
        //添加进舞台以及从舞台移除的各种监听
        _this.once(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        _this.once(egret.Event.REMOVED_FROM_STAGE, _this.removeStage, _this);
        return _this;
    }
    /**
     * 添加进舞台
     */
    GameMain.prototype.addToStage = function () {
        console.log('添加进舞台');
        this.newGameBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onClick, this);
    };
    /**
     * 各种点击事件
     */
    GameMain.prototype.onClick = function (event) {
        switch (event.currentTarget) {
            case this.newGameBtn:
                console.log('新游戏');
                break;
        }
    };
    /**
     * 从舞台移除
     */
    GameMain.prototype.removeStage = function () {
        console.log('从舞台移除');
    };
    return GameMain;
}(eui.Component));
__reflect(GameMain.prototype, "GameMain");
//# sourceMappingURL=GameMain.js.map