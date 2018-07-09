


/**
 * 画圆
 */
class DrawCircle extends egret.DisplayObjectContainer{


    private shape:egret.Shape=new egret.Shape();

    public constructor(){
        super();
        this.once(egret.Event.ADDED_TO_STAGE,this.init,this)
    }

    /**
     * 初始化
     */
    private init():void{
        let shape:egret.Shape=this.shape;
        this.addChild(shape);

        this.drawCircle(this.stage.stageWidth/2,this.stage.stageHeight/2);
        

        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(event:egret.TouchEvent)=>{
            this.drawCircle(event.stageX,event.stageY)
        },this);


    }

    /**
     * 画圆形
     */
    private drawCircle(x:number,y:number):void{
        let shape:egret.Shape=this.shape;
        shape.graphics.beginFill(0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100), 1)
        shape.graphics.lineStyle(2, 0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100))
        shape.graphics.drawCircle(x,y,Math.random()*50+50);
        shape.graphics.endFill();

    }
    

}