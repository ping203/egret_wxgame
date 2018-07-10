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
    return GridItemData;
}());
__reflect(GridItemData.prototype, "GridItemData");
var ItemData = (function (_super) {
    __extends(ItemData, _super);
    function ItemData() {
        var _this = _super.call(this) || this;
        _this.skinName = "GridItemSkin";
        _this.touchEnabled = false; //不能点击
        _this.anchorOffsetX = _this.width >> 1;
        _this.anchorOffsetY = _this.height >> 1;
        return _this;
    }
    ItemData.prototype.setData = function (data) {
        this.data = data;
        this.grid.fillColor = data.bg;
        if (data.num > 0) {
            this.numTxt.visible = true;
            this.numTxt.text = data.num + "";
            this.numTxt.size = data.size;
            this.numTxt.textColor = data.color;
        }
        else {
            this.numTxt.visible = false;
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