


/**
 * 深度管理
 */
class DeepManager extends egret.DisplayObjectContainer{

    //舞台上显示的三个对象
    private leftBitmap:egret.Bitmap;
    private middleBitmap:egret.Bitmap;
    private RightBitmap:egret.Bitmap;

    public constructor(){
        super();
        this.once(egret.Event.ADDED_TO_STAGE,this.init,this);
    }



    private init():void{
        this.leftBitmap=new egret.Bitmap();
        this.middleBitmap=new egret.Bitmap();
        this.RightBitmap=new egret.Bitmap();
        
        this.leftBitmap.texture=RES.getRes('demo_pic_png');
        this.middleBitmap.texture=RES.getRes('demo_pic_png');
        this.RightBitmap.texture=RES.getRes('demo_pic_png');

        this.leftBitmap.x=50,
        this.leftBitmap.y= this.stage.stageHeight / 2 - this.leftBitmap.height / 2;        
        this.leftBitmap.touchEnabled=true;
        this.leftBitmap.pixelHitTest=true;
        this.addChild(this.leftBitmap);

        this.middleBitmap.x = 130;
        this.middleBitmap.y = this.stage.stageHeight / 2 - this.middleBitmap.height / 2;
        this.middleBitmap.touchEnabled = true;
        this.middleBitmap.pixelHitTest = true;
        this.addChild(this.middleBitmap);

        this.RightBitmap.x = this.stage.stageWidth / 2 - this.middleBitmap.width / 2-30;
        this.RightBitmap.y = this.stage.stageHeight / 2 - this.RightBitmap.height / 2;
        this.RightBitmap.touchEnabled = true;
        this.RightBitmap.pixelHitTest = true;
        this.addChild(this.RightBitmap);

        this.leftBitmap.addEventListener(egret.TouchEvent.TOUCH_TAP,(event)=>{
            this.setChildIndex(this.leftBitmap,this.numChildren-1);
        },this)

        this.middleBitmap.addEventListener(egret.TouchEvent.TOUCH_TAP,(event)=>{
            this.setChildIndex(this.middleBitmap,this.numChildren-1);
        },this)

        this.RightBitmap.addEventListener(egret.TouchEvent.TOUCH_TAP,(event)=>{
            this.setChildIndex(this.RightBitmap,this.numChildren-1);
        },this)

    }

}
