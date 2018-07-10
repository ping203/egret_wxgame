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
        //游戏方格的个数
        _this.gridNum = 16;
        //格子大小
        _this.itemSize = 125;
        //格子圆角
        _this.itemRadius = 15;
        //格子的间距
        _this.itemSpace = 20;
        //数据源
        _this.gameData = [[], [], [], []];
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
        //创建16个方格背景
        for (var i = 0; i < this.gridNum; i++) {
            var row = i % 4;
            var col = Math.floor(i / 4);
            var gridX = this.itemSpace + (this.itemSpace + this.itemSize) * row;
            var gridY = this.itemSpace + (this.itemSpace + this.itemSize) * col;
            console.log(gridX, gridY);
            var gridRect = Utils.createRect(gridX, gridY, this.itemSize, this.itemSize, this.itemRadius, 0xcdc1b4, 1);
            this.gameContent.addChild(gridRect);
        }
        this.newGameBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onClick, this);
    };
    /**
     * 游戏初始化
     */
    GameMain.prototype.resetGame = function () {
        /**清空 */
        for (var i = 0; i < this.gameData.length; i++) {
            for (var j = 0; j < this.gameData[i].length; j++) {
                if (this.gameData[i][j].item) {
                    this.gameData[i][j].item.setData(Utils.numStyle[0]);
                    this.gameData[i][j].value = 0;
                    this.removeFromParent(this.gameData[i][j].item);
                }
            }
        }
        /**新建 */
        for (var i = 0; i < this.gameData.length; i++) {
            for (var j = 0; j < 4; j++) {
                if (!this.gameData[i])
                    this.gameData[i] = [];
                var data = new GridItemData();
                data.value = 0;
                data.i = 0;
                data.j = 0;
                this.gameData[i][j] = data;
            }
        }
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
    /**移除组件 */
    GameMain.prototype.removeFromParent = function (child) {
        if (!child || child.parent == null)
            return;
        child.parent.removeChild(child);
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