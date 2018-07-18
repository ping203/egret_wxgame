

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
        this.bgBitmap.x=0;
        this.bgBitmap.y=0;
        this.anchorOffsetX=GlobalData.GameStageWidth/2;
        this.anchorOffsetY=GlobalData.GameStageHeight/2;
        this.bgBitmap.width=0;
        this.bgBitmap.height=0;
        this.addChild(this.bgBitmap);
        //开始播放动画
        let tw=egret.Tween.get(this.bgBitmap);
        
    }

}