

class MainGame extends egret.DisplayObjectContainer{

    public constructor(){
        super();
        this.once(egret.Event.ADDED_TO_STAGE,this.init,this);
    }

    /**
     * 初始化
     */
    private init():void{
        console.log("显示开始界面")

    }

}