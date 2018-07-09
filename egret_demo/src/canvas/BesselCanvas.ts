
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

    //当前正在拖拽的shape
    private currentShape:egret.Shape;

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
        this.besselShape.graphics.moveTo(140,400);
        this.besselShape.graphics.curveTo(340,200,480,500);

        //绘制三个控制点
        this.startPoint=this.initShape(140,400,0xffff00);
        this.controllPoint=this.initShape(340,200,0xff0000);
        this.anchorPoint=this.initShape(480,500,0x000ff0);

        //将三个控制点添加进面板
        this.addChild(this.startPoint);    
        this.addChild(this.controllPoint);    
        this.addChild(this.anchorPoint);    

    }

    
    private initShape(x:number,y:number,color:number):egret.Shape{
        let shape:egret.Shape=new egret.Shape();
        shape.graphics.beginFill(color);
        shape.graphics.drawCircle(0,0,20);
        shape.graphics.endFill();
        shape.x=x;
        shape.y=y;
        shape.touchEnabled=true;
        shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBeginTouchHandler,this);
        return shape;
    }

    
    /**
     * 开始触摸事件
     */
    private onBeginTouchHandler(event:egret.TouchEvent):void{

        //阻止对事件流中当前节点中和所有后续节点中的事件侦听器进行处理，该方法立即生效
        event.stopImmediatePropagation();
        //获取当前正在拖动的shape
        this.currentShape=<egret.Shape>event.currentTarget;
        this.currentShape.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBeginTouchHandler,this);
        this.currentShape.touchEnabled=false;

        //对舞台添加监听事件，来动态移动shape
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMoveHandler,this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.onEndHandler,this);

    }

    /**
     * 触摸过程中的移动事件
     */
    private onMoveHandler(event:egret.TouchEvent):void{
        this.currentShape.x=event.stageX;
        this.currentShape.y=event.stageY;
        
        this.resetCurr();
    }

    /**
     * 结束触摸事件
     */
    private onEndHandler(event:egret.TouchEvent):void{
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMoveHandler,this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.onEndHandler,this);
        this.currentShape.touchEnabled=true;
        this.currentShape.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBeginTouchHandler,this);
    }

    /**
     * 重置贝塞尔曲线
     */
    private resetCurr():void{

        let cureShape=this.besselShape;
        cureShape.graphics.clear();
        cureShape.graphics.lineStyle(3,0xff0ff0);
        cureShape.graphics.moveTo(this.startPoint.x,this.startPoint.y);
        cureShape.graphics.curveTo(this.controllPoint.x,this.controllPoint.y,
        this.anchorPoint.x,this.anchorPoint.y);

    }

}
