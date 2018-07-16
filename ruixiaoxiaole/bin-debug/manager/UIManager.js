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
        //存放所有UI的数组
        _this.uiClassArray = null;
        //当前是否正在执行动画
        _this.isUiTweeing = false;
        //动画的类型
        _this.tweenType = -1;
        return _this;
    }
    /**
     * 获取实例
     */
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
        this.initUIClass();
        this.initJsonData();
        this.mainConn = new egret.DisplayObjectContainer();
        if (GlobalData.GameStage != null) {
            console.log('添加主舞台');
            GlobalData.GameStage.addChild(this.mainConn);
            this.openFirstUI(UIManager.CLASS_UI_INDEX_LOGOANIMATION, 1);
        }
    };
    /**
     * 初始化ui
     */
    UIManager.prototype.initUIClass = function () {
        this.uiClassArray = [Start];
    };
    /**
     * 初始化json数据
     */
    UIManager.prototype.initJsonData = function () {
    };
    /**
     * 打开一级界面
     * @param 索引
     * @param 动画类型
     */
    UIManager.prototype.openFirstUI = function (index, tweenType) {
        if (tweenType === void 0) { tweenType = 0; }
        if (this.isUiTweeing) {
            console.log("正在执行动画");
            return;
        }
        this.isUiTweeing = true;
        //只接受一个一级界面的存在，当大于一个的时候，先移除底部的界面
        if (this.mainConn.numChildren > 1) {
            this.mainConn.removeChildAt(0);
        }
        if (this.tweenType == TweenManager.TWEEN_UI_RANDOM) {
            this.tweenType = Math.floor(Math.random() * 3 + 1);
        }
        console.log("缓动动画类型");
        //如果第一次添加,没有其他界面.直接加上UI
        if (this.mainConn.numChildren == 0) {
            this.realOpenFirst(index, tweenType);
        }
    };
    /**
     * really？
     */
    UIManager.prototype.realOpenFirst = function (index, tweenType, extra) {
        if (extra === void 0) { extra = 0; }
        if (this.uiClassArray[index] != null) {
            var ui = new this.uiClassArray[index];
            if (tweenType == TweenManager.TWEEN_UI_NONE) {
                this.OpenFirstUIFinish();
            }
            else {
                this.OpenFirstUIFinish.bind(this);
                TweenManager.getInstance().uiAppearTween(ui, tweenType, extra, this.OpenFirstUIFinish, this);
            }
            this.mainConn.addChild(ui);
        }
        else {
            console.log("ui索引错误");
        }
    };
    /**
     * 完成打开第一级UI
     */
    UIManager.prototype.OpenFirstUIFinish = function () {
        console.log("完成打开一级UI");
        //移除之前的界面
        while (this.mainConn.numChildren > 1) {
            this.mainConn.removeChildAt(0);
        }
        this.isUiTweeing = false;
    };
    /**
     * 打开一个二级界面
     *
     */
    UIManager.prototype.openSecondUI = function () {
    };
    UIManager.CLASS_UI_INDEX_LOGOANIMATION = 0;
    UIManager.CLASS_UI_INDEX_LOGINMAIN = 1;
    UIManager.CLASS_UI_INDEX_STORY = 2;
    UIManager.CLASS_UI_INDEX_FIGHT = 3;
    return UIManager;
}(egret.EventDispatcher));
__reflect(UIManager.prototype, "UIManager");
//# sourceMappingURL=UIManager.js.map