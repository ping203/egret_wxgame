

/**
 * 统一的数据管理器
 */
class DataManager extends egret.EventDispatcher{
    
    
    public constructor(){
        super();

    }

    private static instance: DataManager;
    
    public static getInstance(): DataManager {
        if(this.instance == null) {
            this.instance = new DataManager();
        }
        return this.instance;
    }

}