


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
     * 初始化所有需要展示的ui
     */
    private initUiClass(){
        this.uiClassArray=[Start];
    }


    

}