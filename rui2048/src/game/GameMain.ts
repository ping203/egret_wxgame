
/**
 * 游戏的主场景类
 * 
 */
class GameMain extends eui.Component{

    public static self: GameMain;

    //新游戏按钮
    private newGameBtn: eui.Button;
    //游戏的主窗口
    private gameContent:eui.Group;
    
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
        this.newGameBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onClick,this);
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
    /**
     * 从舞台移除
     */
    private removeStage():void{
        console.log('从舞台移除')
    }
}
