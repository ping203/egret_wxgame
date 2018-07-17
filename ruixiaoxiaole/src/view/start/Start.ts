
/**
 * 进入主界面的开始界面
 */
class Start extends eui.Component{
    
    private logo:eui.Image;
    private logoTxt:eui.Label;

    public constructor(){
        super();
        this.skinName='LogoAnimationSkin'
        this.once(egret.Event.ADDED_TO_STAGE,this.init,this);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.removeStage, this);
    }

    /**
     * 初始化
     */
    private init():void{
        //先添加灰色的背景
        this.addChild(ViewUtils.getShape(GlobalData.GameStageWidth,GlobalData.GameStageHeight,0x888888,0.2));
        this.logo.anchorOffsetX=this.width/2;
        this.logo.anchorOffsetY=0;
        //先设置底下的文本透明度为0
        this.logoTxt.alpha=0;
        this.logo.scaleX=this.logo.scaleY=0.1;

        //开始缓动动画
        let tw=egret.Tween.get(this.logo);
        tw.to({y:GlobalData.GameStageHeight/2-100,scaleX:1,scaleY:1},1000,egret.Ease.backInOut).call(this.txtTween,this);
    }

    /**
     * 底部文本的动画
     */
    private txtTween():void{
        let tw=egret.Tween.get(this.logoTxt);
        tw.to({alpha:1},1000).wait(100). call(this.clear,this);
    }

    private clear():void{
        //打开主界面
        UIManager.getInstance().openFirstUI(UIManager.CLASS_UI_INDEX_LOGINMAIN);
    }

    /**
     * 移除舞台
     */
    private removeStage():void{
        console.log('start移除舞台')
    }
    
}