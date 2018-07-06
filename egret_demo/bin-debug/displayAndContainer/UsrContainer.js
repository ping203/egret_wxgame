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
 * 容器的使用
 */
var UseContainer = (function (_super) {
    __extends(UseContainer, _super);
    function UseContainer() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    UseContainer.prototype.init = function () {
        //先初始化两个矩形框以及矩形框上面的提示信息
        //两个按钮
        this.leftBtn = new egret.TextField();
        this.leftBtn.size = 28;
        this.leftBtn.textAlign = egret.HorizontalAlign.CENTER;
        this.leftBtn.textColor = 0xffffff;
        this.leftBtn.background = true;
        this.leftBtn.backgroundColor = 0xd71345;
        this.leftBtn.x = this.stage.stageWidth / 4 - this.leftBtn.width / 2;
        this.leftBtn.y = 120;
        this.leftBtn.touchEnabled = true;
        this.leftBtn.text = '红色容器';
        this.addChild(this.leftBtn);
        this.rightBtn = new egret.TextField();
        this.rightBtn.size = 28;
        this.rightBtn.textAlign = egret.HorizontalAlign.CENTER;
        this.rightBtn.textColor = 0xffffff;
        this.rightBtn.background = true;
        this.rightBtn.backgroundColor = 0x0094ff;
        this.rightBtn.x = this.stage.stageWidth / 2 + this.stage.stageWidth / 4 - this.rightBtn.width / 2;
        this.rightBtn.y = 120;
        this.rightBtn.touchEnabled = true;
        this.rightBtn.text = '蓝色容器';
        this.addChild(this.rightBtn);
        //初始化两个容器
        this.leftContainer = new egret.DisplayObjectContainer();
        this.addChild(this.leftContainer);
        this.leftRect = new egret.Shape();
        this.leftRect.graphics.lineStyle(10, 0xd71345);
        this.leftRect.graphics.moveTo(40, 200);
        this.leftRect.graphics.lineTo(250, 200);
        this.leftRect.graphics.lineTo(250, 500);
        this.leftRect.graphics.lineTo(40, 500);
        this.leftRect.graphics.lineTo(40, 200);
        this.leftRect.graphics.endFill();
        this.addChild(this.leftRect);
        this.rightContainer = new egret.DisplayObjectContainer();
        this.addChild(this.rightContainer);
        this.rightRect = new egret.Shape();
        this.rightRect.graphics.lineStyle(10, 0x102b6a);
        this.rightRect.graphics.moveTo(350, 200);
        this.rightRect.graphics.lineTo(570, 200);
        this.rightRect.graphics.lineTo(570, 500);
        this.rightRect.graphics.lineTo(350, 500);
        this.rightRect.graphics.lineTo(350, 200);
        this.rightRect.graphics.endFill();
        this.addChild(this.rightRect);
    };
    return UseContainer;
}(egret.DisplayObjectContainer));
__reflect(UseContainer.prototype, "UseContainer");
//# sourceMappingURL=UsrContainer.js.map