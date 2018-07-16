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
 * 统一的数据管理器
 */
var DataManager = (function (_super) {
    __extends(DataManager, _super);
    function DataManager() {
        return _super.call(this) || this;
    }
    DataManager.getInstance = function () {
        if (this.instance == null) {
            this.instance = new DataManager();
        }
        return this.instance;
    };
    return DataManager;
}(egret.EventDispatcher));
__reflect(DataManager.prototype, "DataManager");
//# sourceMappingURL=DataManager.js.map