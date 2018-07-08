
/**
 * 贝塞尔曲线的绘制
 */
class BesselCanvas extends egret.DisplayObjectContainer{

    private besselShape:egret.Shape;

    //开始点
    private startPoint:egret.Shape;
    //控制点
    private controllPoint:egret.Shape;
    //锚点
    private anchorPoint:egret.Shape;

    public constructor(){
        super();
        this.once(egret.Event.ADDED_TO_STAGE,this.init,this);
    }
    
    /**
     * 初始化
     */
    private init():void{
        this.besselShape=new egret.Shape();
        this.addChild(this.besselShape);
        //绘制贝塞尔曲线
        this.besselShape.graphics.lineStyle(3,0xff0ff0);
        this.besselShape.graphics.moveTo(140,100);
        this.besselShape.graphics.curveTo(340,200,480,500);

        //绘制三个控制点
        this.startPoint=this.initShape(140,400,0xffff00);
        this.controllPoint=this.initShape(340,200,0xff0000);
        this.anchorPoint=this.initShape(480,500,0x000ff0);

    }

    
    private initShape(x:number,y:number,color:number):egret.Shape{
        let shape:egret.Shape=new egret.Shape();
        shape.graphics.beginFill(color);
        shape.graphics.drawCircle(0,0,20);
        shape.graphics.endFill();
        shape.x=x;
        shape.y=y;
        return shape;
    }
}