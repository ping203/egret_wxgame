


/**
 * 统一的UI管理器
 */
class UIManager extends egret.EventDispatcher{

    private static instance:UIManager;
    //存放所有界面的数组
    private uiClassArray:Array<any>=null;
    //是否正在执行转场动画
    private isUiTweeing:boolean=false;
    //动画的类型
    private tweenType:number=1;
    //主容器
    private mainConn:egret.DisplayObjectContainer;


    public static CLASS_UI_INDEX_MAIN:     number = 0;
    
    public constructor(){
        super()
    }

    public static getInstance():UIManager{
        if(this.instance==null){
            this.instance=new UIManager();
        }
        return this.instance;
    }

    /**
     * 开始游戏
     */
    public  startGame():void{
        this.mainConn=new egret.DisplayObjectContainer();
        if(GlobalData.GameStage!=null){
            //将游戏主界面添加进主容器中
            GlobalData.GameStage.addChild(this.mainConn);
            this.openFirstUI(UIManager.CLASS_UI_INDEX_MAIN);
        }

    }

    /**
     * 打开第一个界面
     */
    private openFirstUI(index:number,tweenType:number=0):void{
        // TODO
    }
    /**
     * 初始化所有需要展示的ui
     */
    private initUiClass(){
        this.uiClassArray=[Start,MainGame];
    }


    

}