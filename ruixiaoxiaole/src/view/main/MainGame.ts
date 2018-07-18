

/**
 * 游戏主界面
 */
class MainGame extends eui.Component{

    private btnStartGame:egret.Bitmap;

    public constructor(){
        super();
        this.skinName='MainGameSkin';
        this.once(egret.Event.ADDED_TO_STAGE,this.init,this);
        this.once(egret.Event.REMOVED_FROM_STAGE,this.removeMainStage,this);
    }

    /**
     * 初始化
     */
    private init():void{
        this.btnStartGame=new egret.Bitmap();
        this.btnStartGame.texture=RES.getRes("startgame_png");
        this.addChild(this.btnStartGame);
        this.btnStartGame.x=GlobalData.GameStageWidth-this.btnStartGame.width-50;
        this.btnStartGame.y=GlobalData.GameStageHeight-this.btnStartGame.height-50;
        let tw=egret.Tween.get(this.btnStartGame,{ loop:true})
        let oldY=this.btnStartGame.y;

        tw.to({y:this.btnStartGame.y+20},500).to({y:oldY},500).wait(100).call(()=>{

        },this);
        
    }

    /**
     * 移除舞台的监听
     */
    private removeMainStage():void{
        console.log('移除了主界面')
    }

}