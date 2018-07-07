
/**
 * 贝塞尔曲线的绘制
 */
class BesselCanvas extends egret.DisplayObjectContainer{

    public constructor(){
        super();
        this.once(egret.Event.ADDED_TO_STAGE,this.init,this);
    }
    
    /**
     * 初始化
     */
    private init():void{


    }

}