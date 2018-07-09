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
 * 脏矩形
 *
 */
var DirtyRect = (function (_super) {
    __extends(DirtyRect, _super);
    function DirtyRect() {
        var _this = _super.call(this) || this;
        _this.scaleBase = 0;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    /**
     * 初始化
     */
    DirtyRect.prototype.init = function () {
        var _this = this;
        this.smallBitmap = new egret.Bitmap();
        this.smallBitmap.texture = RES.getRes('small_bird_png');
        //产生确定数量的小鸟
        var wHalfBird = this.smallBitmap.width / 2;
        var hHalfBird = this.smallBitmap.height / 2;
        this.rectScope = new egret.Rectangle(wHalfBird * DirtyRect.SCALE_BASE, hHalfBird * DirtyRect.SCALE_BASE, this.stage.stageWidth - wHalfBird * DirtyRect.SCALE_BASE * 2, this.stage.stageHeight - hHalfBird * DirtyRect.SCALE_BASE * 2);
        this.birdArray = new Array();
        for (var i = 0; i < DirtyRect.NUM; i++) {
            var bird = new egret.Bitmap();
            bird.texture = RES.getRes('small_bird_png');
            //设置锚点
            bird.anchorOffsetX = wHalfBird;
            bird.anchorOffsetY = hHalfBird;
            //给一个随机的位置
            bird.x = this.rectScope.x + this.rectScope.width * Math.random();
            bird.y = this.rectScope.y + this.rectScope.height * Math.random();
            console.log(bird.x, bird.y);
            bird.scaleX = bird.scaleY = DirtyRect.SCALE_BASE;
            this.birdArray.push(bird);
            this.addChild(bird);
        }
        /// 随机取三个位置的白鹭小鸟并且确保深度最高
        this.currBirdIndexArray = new Array();
        this.currBirdIndexArray.push(Math.floor(DirtyRect.NUM * Math.random()));
        this.currBirdIndexArray.push(Math.floor(DirtyRect.NUM * Math.random()));
        this.currBirdIndexArray.push(Math.floor(DirtyRect.NUM * Math.random()));
        this.setChildIndex(this.birdArray[this.currBirdIndexArray[0]], this.numChildren - 3);
        this.setChildIndex(this.birdArray[this.currBirdIndexArray[1]], this.numChildren - 4);
        this.setChildIndex(this.birdArray[this.currBirdIndexArray[2]], this.numChildren - 5);
        //产生动画
        //进入新的一帧的监听，监听此事件会在下一帧开始时触发一次回调
        this.stage.addEventListener(egret.Event.ENTER_FRAME, function (event) {
            for (var i = 0; i < DirtyRect.NUM; i++) {
                _this.birdArray[i].cacheAsBitmap = false;
                //旋转并伴随的缩放
                var scale = DirtyRect.SCALE_BASE + Math.abs(Math.sin(_this.scaleBase += 0.03)) * DirtyRect.SCALE_RANGE;
                if (i % 2 == 0) {
                    _this.birdArray[i].rotation += 3;
                    _this.birdArray[i].scaleX = scale;
                    _this.birdArray[i].scaleY = scale;
                }
                else {
                    _this.birdArray[i].rotation -= 20;
                    _this.birdArray[i].scaleX = scale;
                    _this.birdArray[i].scaleY = scale;
                }
                // this.birdArray[this.currBirdIndexArray[1]].rotation-=3;
                // this.birdArray[this.currBirdIndexArray[2]].rotation+=3;
                // this.birdArray[i].scaleX=this.birdArray[i].scaleY=scale;
                // this.birdArray[this.currBirdIndexArray[1]].scaleX=this.birdArray[this.currBirdIndexArray[1]].scaleY=scale;
                // this.birdArray[this.currBirdIndexArray[2]].scaleX=this.birdArray[this.currBirdIndexArray[2]].scaleY=scale;
            }
        }, this);
    };
    DirtyRect.NUM = 100;
    //基础的缩放值
    DirtyRect.SCALE_BASE = 0.5;
    //缩放范围
    DirtyRect.SCALE_RANGE = 0.5;
    return DirtyRect;
}(egret.DisplayObjectContainer));
__reflect(DirtyRect.prototype, "DirtyRect");
//# sourceMappingURL=DirtyRect.js.map