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
 * 显示对象的最基本操作
 * 显示对象可以是外部加载的图片资源,也可以是程序绘制的形状
 * 所有的显示对象显示均需要添加到显示列表
 *
 */
var BaseDisplay = (function (_super) {
    __extends(BaseDisplay, _super);
    function BaseDisplay() {
        var _this = _super.call(this) || this;
        //once只触发一次
        _this.once(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    /**
     * 添加到舞台
     */
    BaseDisplay.prototype.addToStage = function (event) {
        var showBitmap = new egret.Bitmap();
        showBitmap.texture = RES.getRes('demo_pic_png');
        showBitmap.x = 100,
            showBitmap.y = 100;
        this.addChild(showBitmap);
        //为定位设置锚点
        showBitmap.anchorOffsetX = showBitmap.width / 2;
        showBitmap.anchorOffsetY = showBitmap.height / 2;
        showBitmap.x = this.stage.width * .5;
        showBitmap.y = this.stage.height * .5;
        this.bgInfo = new egret.Shape();
        this.addChildAt(this.bgInfo, this.numChildren - 1);
        this.bgInfo.graphics.clear();
        this.bgInfo.graphics.beginFill(0xffffff, 0.5);
        this.bgInfo.graphics.drawRect(0, 0, screen.width, screen.height);
        this.bgInfo.graphics.endFill();
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (event) {
            showBitmap.x = event.localX;
            showBitmap.y = event.localY;
        }, this);
    };
    return BaseDisplay;
}(egret.DisplayObjectContainer));
__reflect(BaseDisplay.prototype, "BaseDisplay");
//# sourceMappingURL=BaseDisplay.js.map