

class GridItemData {

    public i: number;
    public j: number;
    public value: number = 0;//值    

    public item: ItemData;

        /**x的位置 */
    public get disX(): number {
        /**修改锚点为中心点用来动画处理 */
        let _half: number = 125 >> 1;
        let disX: number = 20 + (20 + 125) * this.j;
        return disX;
    }
    /**y的位置 */
    public get disY(): number {
        /**修改锚点为中心点用来动画处理 */
        let _half: number =  125 >> 1;
        let disY: number = 20 + (20 + 125) * this.i;
        return disY;
    }   
}

class ItemData extends eui.Component {

    public gridItemBg: eui.Rect;
    public gridItemTxt: eui.Label;
    public data: { num, color, bg, size };
    private _num: number;
    public constructor() {
        super();
        this.skinName = "GridItemSkin";
        this.touchEnabled = false;//不能点击
        // this.anchorOffsetX = this.width >> 1;
        // this.anchorOffsetY = this.height >> 1;
    }

    public setData(data: { num, color, bg, size }): void {
        this.data = data;
        this.gridItemBg.fillColor=data.bg;
        if (data.num > 0) {
            this.gridItemTxt.visible = true;
            this.gridItemTxt.text = data.num + "";
            this.gridItemTxt.size = data.size;
            this.gridItemTxt.textColor = data.color;
        } else {
            this.gridItemTxt.visible = false;
        }
    }

    public get num(): number {
        return this.data.num;
    }
}