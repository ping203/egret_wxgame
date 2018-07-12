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
        return _super.call(this) || this;
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
    return UIManager;
}(egret.EventDispatcher));
__reflect(UIManager.prototype, "UIManager");
//# sourceMappingURL=UIManager.js.map