var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 统一的动画管理类
 */
var TweenManager = (function () {
    /**
     * 构造函数
     */
    function TweenManager() {
        //动画持续的时长
        this.tweenUITime = 500;
    }
    TweenManager.getInstance = function () {
        if (this.instance == null) {
            this.instance = new TweenManager();
        }
        return this.instance;
    };
    /**
     * 对ui进行缓动进入
     */
    TweenManager.prototype.uiAppearTween = function (ui, type, extra, callback, thisObj) {
        var tw = egret.Tween.get(ui);
        var stageWidth = GlobalData.GameStageWidth;
        var stageHeight = GlobalData.GameStageHeight;
        var xx = 0; //目标x
        var yy = 0; //目标y
        console.log("stageWidth:", stageWidth);
        console.log("stageHeight:", stageHeight);
        //根据类型初始化状态
        if (type == TweenManager.TWEEN_UI_MOVE) {
            //设置ui的锚点为舞台的中心点
            ui.anchorOffsetX = stageWidth / 2;
            ui.anchorOffsetY = stageHeight / 2;
            if (extra == 0) {
                ui.x = -stageWidth / 2;
                ui.y = stageHeight / 2;
            }
            else if (extra == 1) {
            }
            else if (extra == 2) {
            }
            else {
            }
            if (callback != null) {
                tw.to({ x: stageWidth / 2, y: stageHeight / 2 }, this.tweenUITime);
            }
            else {
                tw.to({ x: stageWidth / 2, y: stageHeight / 2 }, this.tweenUITime).call(callback, thisObj);
            }
        }
        else if (type == TweenManager.TWEEN_UI_MOVE) {
        }
    };
    //随机选取一种动画效果
    TweenManager.TWEEN_UI_RANDOM = -1;
    //无动画类型
    TweenManager.TWEEN_UI_NONE = 0;
    //平移动画类型
    TweenManager.TWEEN_UI_MOVE = 1;
    //缩放类型动画
    TweenManager.TWEEN_UI_SCALE = 2;
    //缩放加旋转动画类型
    TweenManager.TWEEN_UI_SCALE_ROTATW = 3;
    return TweenManager;
}());
__reflect(TweenManager.prototype, "TweenManager");
//# sourceMappingURL=TweenManager.js.map