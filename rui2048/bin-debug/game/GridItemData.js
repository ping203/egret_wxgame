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
var GridItemData = (function () {
    function GridItemData() {
        this.value = 0; //值    
    }
    Object.defineProperty(GridItemData.prototype, "disX", {
        /**x的位置 */
        get: function () {
            /**修改锚点为中心点用来动画处理 */
            var _half = 125 >> 1;
            var disX = 20 + (20 + 125) * this.j;
            return disX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridItemData.prototype, "disY", {
        /**y的位置 */
        get: function () {
            /**修改锚点为中心点用来动画处理 */
            var _half = 125 >> 1;
            var disY = 20 + (20 + 125) * this.i;
            return disY;
        },
        enumerable: true,
        configurable: true
    });
    return GridItemData;
}());
__reflect(GridItemData.prototype, "GridItemData");
var ItemData = (function (_super) {
    __extends(ItemData, _super);
    function ItemData() {
        var _this = _super.call(this) || this;
        _this.skinName = "GridItemSkin";
        _this.touchEnabled = false; //不能点击
        return _this;
        // this.anchorOffsetX = this.width >> 1;
        // this.anchorOffsetY = this.height >> 1;
    }
    ItemData.prototype.setData = function (data) {
        this.data = data;
        this.gridItemBg.fillColor = data.bg;
        if (data.num > 0) {
            this.gridItemTxt.visible = true;
            this.gridItemTxt.text = data.num + "";
            this.gridItemTxt.size = data.size;
            this.gridItemTxt.textColor = data.color;
        }
        else {
            this.gridItemTxt.visible = false;
        }
    };
    Object.defineProperty(ItemData.prototype, "num", {
        get: function () {
            return this.data.num;
        },
        enumerable: true,
        configurable: true
    });
    return ItemData;
}(eui.Component));
__reflect(ItemData.prototype, "ItemData");
//# sourceMappingURL=GridItemData.js.map