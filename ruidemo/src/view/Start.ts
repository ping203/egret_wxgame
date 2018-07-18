

class Start extends egret.DisplayObjectContainer{

    private bgBitmap:egret.Bitmap;
    public constructor(){
        super()
        this.once(egret.Event.ADDED_TO_STAGE,this.init,this);

    }

    /**
     * 初始化
     */
    private init(){
        this.bgBitmap=new egret.Bitmap();
        this.bgBitmap.texture=RES.getRes('main_bg_png');
        
        this.bgBitmap.anchorOffsetX=GlobalData.GameStageWidth/2;
        this.bgBitmap.anchorOffsetY=GlobalData.GameStageHeight/2;
        this.bgBitmap.x=GlobalData.GameStageWidth/2;
        this.bgBitmap.y=GlobalData.GameStageHeight/2;
        this.bgBitmap.width=GlobalData.GameStageWidth;
        this.bgBitmap.height=GlobalData.GameStageHeight;
        
        this.bgBitmap.scaleX=0;
        this.bgBitmap.scaleY=0;
        this.addChild(this.bgBitmap);
        //开始播放动画
        let tw=egret.Tween.get(this.bgBitmap);
        tw.to({scaleX:1,scaleY:1},300,egret.Ease.backOut).call(()=>{
            //跳转到游戏首页
            
        },this);
        
    }

}