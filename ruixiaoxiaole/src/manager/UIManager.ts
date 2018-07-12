
/**
 * 统一的UI管理器
 */
class UIManager extends egret.EventDispatcher{

    /**
     * 存放所有UI的数组
     */
    private uiClassArray:Array<any> = null;


    public constructor() {
    	super();
	}


    private static instance:UIManager;

    /**
     * 获取实例
     */
	public static getInstance():UIManager{
        if(this.instance == null){
            this.instance = new UIManager();
        }
        return this.instance;
	}

    /**
     * 开始游戏
     */
    public startGame():void{
        this.initUIClass();
        this.initJsonData();

    }

    /**
     * 初始化ui
     */
    private initUIClass():void{
        this.uiClassArray=[Start];
    }

    /**
     * 初始化json数据
     */
    private initJsonData():void{

    }

}   