
/**
 * 游戏的主场景类
 * 
 */
class GameMain extends eui.Component{

    public static self: GameMain;
    //游戏方格的个数
    private gridNum:number=16;

    //新游戏按钮
    private newGameBtn: eui.Button;
    //游戏的主窗口
    private gameContent:eui.Group;
    //格子大小
    private itemSize: number = 125;
    //格子圆角
    private itemRadius: number = 15;
    //格子的间距
    private itemSpace: number = 20;
    //数据源
    private gameData:GridItemData[][]=[[],[],[],[]]

    /**
     * 构造函数
     */
    public constructor(){
        super();
        this.skinName='Game2048Skin'
        GameMain.self=this;
        //添加进舞台以及从舞台移除的各种监听
        this.once(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
        this.once(egret.Event.REMOVED_FROM_STAGE,this.removeStage,this)
    }


    /**
     * 添加进舞台
     */
    private addToStage():void{
        console.log('添加进舞台')
        //创建16个方格背景
        for(let i=0;i<this.gridNum;i++){
            let row: number = i % 4;
            let col: number = Math.floor(i / 4);
            let gridX:number=this.itemSpace+(this.itemSpace+this.itemSize)*row;
            let gridY:number=this.itemSpace+(this.itemSpace+this.itemSize)*col;
            console.log(gridX,gridY);
            let gridRect:eui.Rect=Utils.createRect(gridX,gridY,this.itemSize,this.itemSize,this.itemRadius,
            0xcdc1b4,1);
            this.gameContent.addChild(gridRect);
        }


        this.newGameBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onClick,this);


    }

    /**
     * 游戏初始化
     */
    private resetGame():void{
         /**清空 */
        for (let i = 0; i < this.gameData.length; i++) {
            for (let j: number = 0; j < this.gameData[i].length; j++) {
                if (this.gameData[i][j].item) {
                    this.gameData[i][j].item.setData(Utils.numStyle[0]);
                    this.gameData[i][j].value = 0;
                    this.removeFromParent(this.gameData[i][j].item);

                }
            }
        }

         /**新建 */
        for (let i = 0; i < this.gameData.length; i++) {
            for (let j: number = 0; j < 4; j++) {
                if (!this.gameData[i]) this.gameData[i] = [];
                let data: GridItemData = new GridItemData();
                data.value = 0;
                data.i = 0;
                data.j = 0;
                this.gameData[i][j] = data;
            }
        }


    }
    /**
     * 各种点击事件
     */
    private onClick(event:egret.TouchEvent):void{
        switch(event.currentTarget){
            case this.newGameBtn:
                console.log('新游戏')
                break;
        }
    }

    /**移除组件 */
    public removeFromParent(child: egret.DisplayObject) {
        if (!child || child.parent == null)
            return;
        child.parent.removeChild(child);
    }
    /**
     * 从舞台移除
     */
    private removeStage():void{
        console.log('从舞台移除')
    }
}
