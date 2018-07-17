

/**
 * 游戏主界面
 */
class MainGame extends eui.Component{


    public constructor(){
        super();
        this.skinName='MainGameSkin';
        this.once(egret.Event.ADDED_TO_STAGE,this.init,this);
    }

    /**
     * 初始化
     */
    private init():void{

    }


}