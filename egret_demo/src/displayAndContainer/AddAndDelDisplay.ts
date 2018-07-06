

/**
 * 添加与删除显示对象
 */
class AddAndDelDisplay extends egret.DisplayObjectContainer{

    /**
     * 划分屏幕的四个区域
     */
    private upLeft:egret.Shape;
    private upRight:egret.Shape;
    private downLeft:egret.Shape;
    private downRight:egret.Shape;

    /**
     * 四只白鹭
     */
    private upLeftBird:egret.Bitmap;
    private upRightBird:egret.Bitmap;
    private downLeftBird:egret.Bitmap;
    private downRightBird:egret.Bitmap;

    public constructor(){
        super();
        this.once(egret.Event.ADDED_TO_STAGE,this.init,this);
    }

    
    /**
     * 初始化
     */
    private init(event:egret.Event):void{
        //将屏幕划分为4个区域
        this.upLeft=new egret.Shape();
        this.upRight=new egret.Shape();
        this.downLeft=new egret.Shape();
        this.downRight=new egret.Shape();

        this.upLeft.graphics.beginFill(0xf7acbc);
        this.upLeft.graphics.drawRect(0,0,this.stage.stageWidth/2,this.stage.stageHeight/2);
        this.upLeft.graphics.endFill();
        this.upLeft.x=0;
        this.upLeft.y=0;
        this.upLeft.touchEnabled=true;
        this.addChild(this.upLeft);


        this.upRight=new egret.Shape();
        this.upRight.graphics.beginFill(0xdeab8a);
        this.upRight.graphics.drawRect(0,0,this.stage.stageWidth/2,this.stage.stageHeight/2);
        this.upRight.graphics.endFill();
        this.upRight.x=this.stage.stageWidth/2;
        this.upRight.y=0;
        this.upRight.touchEnabled=true;
        this.addChild(this.upRight);

        this.downLeft=new egret.Shape();
        this.downLeft.graphics.beginFill(0xef5b9c);
        this.downLeft.graphics.drawRect(0,0,this.stage.stageWidth/2,this.stage.stageHeight/2);
        this.downLeft.graphics.endFill();
        this.downLeft.x=0;
        this.downLeft.y=this.stage.stageHeight/2;
        this.downLeft.touchEnabled=true;
        this.addChild(this.downLeft);
        
        this.downRight=new egret.Shape();
        this.downRight.graphics.beginFill(0x0094ff);
        this.downRight.graphics.drawRect(0,0,this.stage.stageWidth/2,this.stage.stageHeight/2);
        this.downRight.graphics.endFill();
        this.downRight.x=this.stage.stageWidth/2;
        this.downRight.y=this.stage.stageHeight/2;
        this.downRight.touchEnabled=true;
        this.addChild(this.downRight);

        //初始化四只小鸟
        
        this.upLeftBird=new egret.Bitmap();
        this.upLeftBird.texture=RES.getRes('demo_pic_png');
        this.upLeftBird.x=this.upLeft.x+(this.upLeft.width/2-this.upLeftBird.width/2);
        this.upLeftBird.y=(this.upLeft.height-this.upLeftBird.height)/2;
        this.addChild(this.upLeftBird);

        this.upRightBird=new egret.Bitmap();
        this.upRightBird.texture=RES.getRes('demo_pic_png');
        this.upRightBird.x=this.upRight.x+(this.upRight.width-this.upRightBird.width)/2;
        this.upRightBird.y=(this.upRight.height-this.upRightBird.height)/2;
        this.addChild(this.upRightBird);

        this.downLeftBird=new egret.Bitmap();
        this.downLeftBird.texture=RES.getRes('demo_pic_png');
        this.downLeftBird.x=(this.downLeft.width-this.downLeftBird.width)/2;
        this.downLeftBird.y=this.downLeft.height+(this.downLeft.height-this.downLeftBird.height)/2
        this.addChild(this.downLeftBird);
        
        this.downRightBird=new egret.Bitmap();
        this.downRightBird.texture=RES.getRes('demo_pic_png');
        this.downRightBird.x=this.downRight.width+(this.downRight.width-this.downRightBird.width)/2
        this.downRightBird.y=this.downRight.height+(this.downRight.height-this.downRightBird.height)/2;
        this.addChild(this.downRightBird);


        this.upLeft.addEventListener(egret.TouchEvent.TOUCH_TAP,(event:egret.TouchEvent)=>{
            if(this.contains(this.upLeftBird)){
                this.removeChild(this.upLeftBird);
            }else{                
                this.addChild(this.upLeftBird);
            }

        },this)

        this.upRight.addEventListener(egret.TouchEvent.TOUCH_TAP,(event:egret.TouchEvent)=>{
            if(this.contains(this.upRightBird)){
                this.removeChild(this.upRightBird);
            }else{
                this.addChild(this.upRightBird);
            }
        },this);

        this.downLeft.addEventListener(egret.TouchEvent.TOUCH_TAP,(event:egret.TouchEvent)=>{
            if(this.contains(this.downLeftBird)){
                this.removeChild(this.downLeftBird);
            }else{
                this.addChild(this.downLeftBird);
            }
        },this)

        this.downRight.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            if(this.contains(this.downRightBird)){
                this.removeChild(this.downRightBird)
            }else{
                this.addChild(this.downRightBird)
            }
        },this);
    }   


}