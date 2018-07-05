

/**
 * 添加与删除显示对象
 */
class AddAndDelDisplay extends egret.DisplayObjectContainer{

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