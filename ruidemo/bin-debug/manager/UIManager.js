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
 * 统一的UI管理器
 */
var UIManager = (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super.call(this) || this;
        //存放所有界面的数组
        _this.uiClassArray = null;
        //是否正在执行转场动画
        _this.isUiTweeing = false;
        //动画的类型
        _this.tweenType = 1;
        return _this;
    }
    UIManager.getInstance = function () {
        if (this.instance == null) {
            this.instance = new UIManager();
        }
        return this.instance;
    };
    /**
     * 开始游戏
     */
    UIManager.prototype.startGame = function () {
        this.mainConn = new egret.DisplayObjectContainer();
        if (GlobalData.GameStage != null) {
            //将游戏主界面添加进主容器中
            GlobalData.GameStage.addChild(this.mainConn);
            this.openFirstUI(UIManager.CLASS_UI_INDEX_MAIN);
        }
    };
    /**
     * 打开第一个界面
     */
    UIManager.prototype.openFirstUI = function (index, tweenType) {
        if (tweenType === void 0) { tweenType = 0; }
        if (this.isUiTweeing) {
            console.log('正在执行动画,请稍等');
            return;
        }
        if (this.mainConn.numChildren > 1) {
            this.mainConn.removeChildAt(0);
        }
        if (this.mainConn.numChildren == 0) {
            this.openUI(index, tweenType);
        }
        else {
            //let lastUI=this.mainConn.getChildAt(0);
            //移除掉当前的界面
            this.mainConn.removeChildAt(0);
            this.openUI(index, tweenType);
        }
    };
    /**
     * 打开新世界的大门 阿门
     */
    UIManager.prototype.openUI = function (index, tweenType, extra) {
        if (extra === void 0) { extra = 0; }
        if (this.uiClassArray[index] != null) {
            var ui = new this.uiClassArray[index]();
            this.mainConn.addChild(ui);
        }
        else {
            console.log('ui索引错误');
        }
    };
    /**
     * 初始化所有需要展示的ui
     */
    UIManager.prototype.initUiClass = function () {
        this.uiClassArray = [MainGame];
    };
    UIManager.CLASS_UI_INDEX_MAIN = 0;
    return UIManager;
}(egret.EventDispatcher));
__reflect(UIManager.prototype, "UIManager");
//# sourceMappingURL=UIManager.js.map