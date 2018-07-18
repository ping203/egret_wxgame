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
     * 初始化所有需要展示的ui
     */
    UIManager.prototype.initUiClass = function () {
        this.uiClassArray = [Start];
    };
    return UIManager;
}(egret.EventDispatcher));
__reflect(UIManager.prototype, "UIManager");
//# sourceMappingURL=UIManager.js.map