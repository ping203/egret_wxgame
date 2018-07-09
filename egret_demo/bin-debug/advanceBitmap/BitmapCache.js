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
 * 位图缓存
 * 位图缓存可以在特定情况下提升性能
 * 原理是将一组在相当长时间内显示状态及相对位置保持恒定的显示对象建立一个快照,
 * 在后续显示中用这个快照代替这一组显示内容,通常用于图形或者文字.
 * 但请注意,仅当缓存的位图可以一次生成,且随后无需更新即可使用时,才适合使用位图缓存功能,
 * 并且缓存后的图像也不应该进行旋转，缩放，以及修改透明度,否则将会因为频繁建立快照产生比
 * 不缓存性能更差的结果
 *
 *
 */
var BitmapCache = (function (_super) {
    __extends(BitmapCache, _super);
    function BitmapCache() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    /**
     * 初始化
     */
    BitmapCache.prototype.init = function () {
        this.bitmap = new egret.Bitmap();
        this.bitmap.texture = RES.getRes('small_bird_png');
        //开启位图缓存
        this.bitmap.cacheAsBitmap = true;
    };
    return BitmapCache;
}(egret.DisplayObjectContainer));
__reflect(BitmapCache.prototype, "BitmapCache");
//# sourceMappingURL=BitmapCache.js.map