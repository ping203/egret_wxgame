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
 * 进入主界面的开始界面
 */
var Start = (function (_super) {
    __extends(Start, _super);
    function Start() {
        var _this = _super.call(this) || this;
        _this.skinName = 'LogoAnimationSkin';
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        _this.once(egret.Event.REMOVED_FROM_STAGE, _this.removeStage, _this);
        return _this;
    }
    /**
     * 初始化
     */
    Start.prototype.init = function () {
        //先添加灰色的背景
        this.addChild(ViewUtils.getShape(GlobalData.GameStageWidth, GlobalData.GameStageHeight, 0x888888, 0.2));
        this.logo.anchorOffsetX = this.width / 2;
        this.logo.anchorOffsetY = 0;
        //先设置底下的文本透明度为0
        this.logoTxt.alpha = 0;
        this.logo.scaleX = this.logo.scaleY = 0.1;
        //开始缓动动画
        var tw = egret.Tween.get(this.logo);
        tw.to({ y: GlobalData.GameStageHeight / 2 - 100, scaleX: 1, scaleY: 1 }, 1000, egret.Ease.backInOut).call(this.txtTween, this);
    };
    /**
     * 底部文本的动画
     */
    Start.prototype.txtTween = function () {
        var tw = egret.Tween.get(this.logoTxt);
        tw.to({ alpha: 1 }, 1000).wait(100).call(this.clear, this);
    };
    Start.prototype.clear = function () {
        //打开主界面
        UIManager.getInstance().openFirstUI(UIManager.CLASS_UI_INDEX_LOGINMAIN, TweenManager.TWEEN_UI_MOVE);
    };
    /**
     * 移除舞台
     */
    Start.prototype.removeStage = function () {
        console.log('start已被移除舞台');
    };
    return Start;
}(eui.Component));
__reflect(Start.prototype, "Start");
//# sourceMappingURL=Start.js.map