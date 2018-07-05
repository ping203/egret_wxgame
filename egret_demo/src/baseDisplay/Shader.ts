

/**
 * 遮罩
 * 遮罩的作用是指定一个显示对象的可见区域,所有显示对象都具备遮罩功能
 * 
 * 矩形遮罩:即显示对象的可见区域是方形而不是不规则形状
 * 用法为:将一个矩形对象赋值给显示对象的mask属性
 * 如果rect发生变化，需要重新将rect赋值给shp.mask
 * 
 * 显示对象遮罩
 * 显示对象的可见区域由另一个显示对象确定，可实现不规则遮罩
 * 用法为：将被遮罩显示对象的mask属性设为遮罩对象
 * 用作遮罩的显示对象可设置动画、动态调整大小。遮罩显示对象不一定需要添加到显示列表中。
 * 但是，如果希望在缩放舞台时也缩放遮罩对象，或者如果希望支持用户与遮罩对象的交互（如调整大小），则必须将遮罩对象添加到显示列表中。
 * 
 * 不能使用一个遮罩对象来遮罩另一个遮罩对象。
 * 显示对象作为遮罩，无需像矩形遮罩那样重复赋值 mask，但是 mask 必须是显示列表里的元素
 */
class Shader extends egret.DisplayObjectContainer{

    //被遮罩的对象
    private shapeMask:egret.Shape;
    //跟随手指的显示对象
    private touchBitmap:egret.Bitmap;

    public constructor(){
        super();
        this.once(egret.Event.ADDED_TO_STAGE,this.init,this);
    }

    /**
     * 初始化
     */
    private init():void{
        //被遮罩的显示对象
        this.shapeMask=new egret.Shape();
        this.shapeMask.graphics.lineStyle(0x000000);
        this.shapeMask.graphics.beginFill(this.getRdmClr());
        this.shapeMask.graphics.drawEllipse( 0, 0, 200, 300 );
        this.shapeMask.graphics.endFill();
        this.shapeMask.x=this.stage.stageWidth/2-200;
        this.shapeMask.y=this.stage.stageHeight/2-300;
        this.shapeMask.anchorOffsetX=this.stage.width/2;
        this.shapeMask.anchorOffsetY=this.stage.height/2;
        this.addChild(this.shapeMask);

        //遮罩对象
        this.touchBitmap=new egret.Bitmap();
        this.touchBitmap.texture=RES.getRes('demo_pic_png');
        this.addChild(this.touchBitmap);
        
        this.launchMask();
    }

    /**
     * 显示遮罩
     */
    private  launchMask():void{
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchHandler,this);
    }

    private updateTouchBitmap(touchX:number,touchY:number):void{
        this.touchBitmap.x=touchX;
        this.touchBitmap.y=touchY;

    }

    private touchHandler(event:egret.TouchEvent):void{
        switch(event.type){
            case egret.TouchEvent.TOUCH_BEGIN:

                this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchHandler,this);
                this.stage.once(egret.TouchEvent.TOUCH_END,this.touchHandler,this);

                //遮罩对象
                this.shapeMask.mask=this.touchBitmap;
                this.updateTouchBitmap(event.stageX,event.stageY);
                
                break;
            case egret.TouchEvent.TOUCH_MOVE:
                this.updateTouchBitmap(event.stageX,event.stageY);

                break;
            case egret.TouchEvent.TOUCH_END:
                this.stage.removeEventListener( egret.TouchEvent.TOUCH_MOVE, this.touchHandler, this );
                this.stage.addEventListener( egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this );

                this.shapeMask.mask= null;
                this.touchBitmap.$maskedObject = null;

                break;
        }
    }

    /**
     * 得到随机的颜色
     */
     private getRdmClr():number{
        return ( Math.floor( Math.random() * 0xff ) << 16 )
            + ( Math.floor( Math.random() * 0xff ) << 8 )
            + Math.floor( Math.random() * 0xff ) ;
    }
}