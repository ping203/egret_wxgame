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
 * 加载界面
 */
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.skinName = 'loadingUISkin';
        _this.createView();
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.updateProgress, _this);
        return _this;
    }
    LoadingUI.prototype.setCurrNum = function (curr) {
        this.currNum = curr;
    };
    LoadingUI.prototype.setTotalNum = function (total) {
        this.total = total;
    };
    LoadingUI.prototype.createView = function () {
        //指定的皮肤文件
        this.imageLoadingProgress.width = 30;
    };
    /**
     * 动态设置当前进度
     */
    LoadingUI.prototype.updateProgress = function () {
        console.log(this.currNum, this.total);
        this.labelLoadingTxt.text = "\u52A0\u8F7D\u4E2D..." + this.currNum + "/" + this.total;
        this.imageLoadingProgress.width = (this.currNum / this.total) * 300;
    };
    /**
     * 各种清除
     */
    LoadingUI.prototype.clear = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.updateProgress, this);
    };
    return LoadingUI;
}(eui.Component));
__reflect(LoadingUI.prototype, "LoadingUI");
//# sourceMappingURL=LoadingUI.js.map