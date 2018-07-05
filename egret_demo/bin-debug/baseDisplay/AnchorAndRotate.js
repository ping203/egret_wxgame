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
 * 锚点及旋转缩放
 */
var AnchorAndRotate = (function (_super) {
    __extends(AnchorAndRotate, _super);
    function AnchorAndRotate() {
        var _this = _super.call(this) || this;
        _this.scaleBase = 0;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    AnchorAndRotate.prototype.init = function (event) {
        this.showBitmap = new egret.Bitmap();
        this.showBitmap.texture = RES.getRes('demo_pic_png');
        this.addChild(this.showBitmap);
        //设置显示图像的锚点
        this.showBitmap.anchorOffsetX = this.showBitmap.width / 2;
        this.showBitmap.anchorOffsetY = this.showBitmap.height / 2;
        this.showBitmap.x = this.stage.stageWidth / 2;
        this.showBitmap.y = this.stage.stageHeight / 2;
        //提示信息
        this.showMsg = new egret.TextField();
        this.addChild(this.showMsg);
        this.showMsg.x = 100;
        this.showMsg.y = 100;
        this.showMsg.size = 28;
        this.showMsg.textAlign = egret.HorizontalAlign.LEFT;
        this.showMsg.textColor = 0x000000;
        this.showMsg.type = egret.TextFieldType.DYNAMIC;
        this.showMsg.lineSpacing = 6;
        this.showMsg.multiline = true;
        //开始播放动画
        this.launchAnim();
    };
    /**
     * 播放动画
     */
    AnchorAndRotate.prototype.launchAnim = function () {
        var _this = this;
        //默认是旋转动画
        this.animMode = AnimModes.ANIM_ROT;
        //添加点击事件监听
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (event) {
            _this.animMode = (_this.animMode + 1) % 3;
        }, this);
        this.stage.addEventListener(egret.Event.ENTER_FRAME, function () {
            switch (_this.animMode) {
                case AnimModes.ANIM_ROT://旋转动画
                    _this.showBitmap.rotation += AnchorAndRotate.STEP_ROTATE;
                    break;
                case AnimModes.ANIM_SCALE://缩放动画
                    _this.showBitmap.scaleX = _this.showBitmap.scaleY = 0.5 + 0.5 * Math.abs(Math.sin(_this.scaleBase += AnchorAndRotate.STEP_SCALE));
                    break;
            }
            _this.showMsg.text = "旋转角度:" + _this.showBitmap.rotation
                + "\n缩放比例:" + _this.showBitmap.scaleX.toFixed(2)
                + "\n轻触进入" + (["缩放", "静止", "旋转"][_this.animMode]) + "模式";
            return false; //这时返回值表示执行结束是否立即重绘
        }, this);
    };
    //旋转以及缩放设定
    AnchorAndRotate.STEP_ROTATE = 3;
    AnchorAndRotate.STEP_SCALE = 0.03;
    return AnchorAndRotate;
}(egret.DisplayObjectContainer));
__reflect(AnchorAndRotate.prototype, "AnchorAndRotate");
/**
 * 动画类型枚举类
 */
var AnimModes = (function () {
    function AnimModes() {
    }
    AnimModes.ANIM_ROT = 0;
    AnimModes.ANIM_SCALE = 1;
    return AnimModes;
}());
__reflect(AnimModes.prototype, "AnimModes");
//# sourceMappingURL=AnchorAndRotate.js.map