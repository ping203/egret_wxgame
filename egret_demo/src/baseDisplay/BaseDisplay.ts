

/**
 * 显示对象的最基本操作
 * 显示对象可以是外部加载的图片资源,也可以是程序绘制的形状
 * 所有的显示对象显示均需要添加到显示列表
 * 
 */
class BaseDisplay extends egret.DisplayObjectContainer{
    //背景信息
    private bgInfo:egret.Shape;


    public constructor(){
        super();
      
        //once只触发一次
        this.once(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
    }

    /**
     * 添加到舞台
     */
    private addToStage(event:egret.Event):void{
        let showBitmap:egret.Bitmap=new egret.Bitmap();
        showBitmap.texture=RES.getRes('demo_pic_png');
        showBitmap.x=100,
        showBitmap.y=100;
        this.addChild(showBitmap);
        
        //为定位设置锚点
        showBitmap.anchorOffsetX=showBitmap.width/2;
        showBitmap.anchorOffsetY=showBitmap.height/2;
        showBitmap.x=this.stage.width*.5;
        showBitmap.y=this.stage.height*.5;

        this.bgInfo=new egret.Shape();
        this.addChildAt( this.bgInfo, this.numChildren - 1 );
        this.bgInfo.graphics.clear();
        this.bgInfo.graphics.beginFill( 0xffffff, 0.5 );
        this.bgInfo.graphics.drawRect( 0, 0, screen.width,screen.height);
        this.bgInfo.graphics.endFill();

        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(event:egret.TouchEvent)=>{
            showBitmap.x=event.localX;
            showBitmap.y=event.localY;
        },this);

    }


    
}