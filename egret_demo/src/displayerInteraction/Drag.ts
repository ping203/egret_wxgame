

/**
 * 拖拽交互
 * 
 */
class Drag extends egret.DisplayObjectContainer{

    private showBitmap:egret.Bitmap;

    //手指按下时,该值为true
    private touchStatus:boolean=false;

    //手指按下时,手指全局坐标与小鸟图片的位置差
    private touchPoint:egret.Point=new egret.Point();

    public constructor(){
        super();
        this.once(egret.Event.ADDED_TO_STAGE,this.init,this);
    }

    /**
     * 初始化
     */
    public init(){
        this.showBitmap=new egret.Bitmap();
        this.showBitmap.texture=RES.getRes('demo_pic_png');
        this.showBitmap.x=this.stage.stageWidth/2;
        this.showBitmap.y=this.stage.stageHeight/2;
        this.showBitmap.touchEnabled=true;
        this.addChild(this.showBitmap);


        this.showBitmap.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.mouseDown,this)
        this.showBitmap.addEventListener(egret.TouchEvent.TOUCH_END,this.mouseUp,this)
    }

    /**
     * 手指按下
     */
    private mouseDown(event:egret.TouchEvent):void{
        console.log('手指按下');
        this.touchStatus=true;
        this.touchPoint.x=event.stageX-this.showBitmap.x;
        this.touchPoint.y=event.stageY-this.showBitmap.y;
        
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this);
    }   

    /**
     * 手指移动的回调
     */
    private onMove(event:egret.TouchEvent):void{
        if(this.touchStatus){
            console.log('点妈耶x:'+event.stageX,'y:'+event.stageY)
            this.showBitmap.x=event.stageX-this.touchPoint.x;
            this.showBitmap.y=event.stageY-this.touchPoint.y;


        }

    }

    /**
     * 手指起来
     */
    private mouseUp(event:egret.TouchEvent):void{
        this.touchStatus=false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this);


    }

}