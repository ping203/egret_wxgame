
/**
 * 统一的UI管理器
 */
class UIManager extends egret.EventDispatcher{

    //存放所有UI的数组
    private uiClassArray:Array<any> = null;
    //所有的UI管理器
    private static instance:UIManager;
    //主容器
    private  mainConn:egret.DisplayObjectContainer;
    //当前是否正在执行动画
    private isUiTweeing:boolean=false;
    //动画的类型
    private tweenType:number=-1;

    public static CLASS_UI_INDEX_LOGOANIMATION: number = 0;
    public static CLASS_UI_INDEX_LOGINMAIN:     number = 1;
    public static CLASS_UI_INDEX_STORY:         number = 2;
    public static CLASS_UI_INDEX_FIGHT:         number = 3;

    public constructor() {
    	super();
	}

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
        this.mainConn=new egret.DisplayObjectContainer();
        
        if(GlobalData.GameStage!=null){
            console.log('添加主舞台')
            GlobalData.GameStage.addChild(this.mainConn);
            this.openFirstUI(UIManager.CLASS_UI_INDEX_LOGINMAIN);   
        }
        
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

    /**
     * 打开一级界面
     * @param 索引
     * @param 动画类型
     */
    private openFirstUI(index:number,tweenType:number=0):void{
        if(this.isUiTweeing){
            console.log("正在执行动画")
            return;
        }
        this.isUiTweeing=true;
        //只接受一个一级界面的存在，当大于一个的时候，先移除底部的界面
        if(this.mainConn.numChildren>1){
            this.mainConn.removeChildAt(0);
        }
        
        if(this.tweenType==TweenManager.TWEEN_UI_RANDOM){
            this.tweenType=Math.floor(Math.random()*3+1);
        }
        console.log("缓动动画类型");
        //如果第一次添加,没有其他界面.直接加上UI
        if(this.mainConn.numChildren==0){
            this.realOpenFirst(index,tweenType);
        }
    }   
    
    /**
     * really？
     */
    private realOpenFirst(index:number,tweenType:number,extra:number=0){
        if(this.uiClassArray[index]!=null){
            let ui=new this.uiClassArray[index] as eui.Component;
            if(tweenType==TweenManager.TWEEN_UI_NONE){
                this.OpenFirstUIFinish();
            }else{
                this.OpenFirstUIFinish.bind(this);
                TweenManager.getInstance().uiAppearTween(ui,tweenType,extra,this.OpenFirstUIFinish,this);
            }
            this.mainConn.addChild(ui)
        }else{
            console.log("ui索引错误")

        }
        
    }

    /**
     * 完成打开第一级UI
     */
    private OpenFirstUIFinish():void{
        console.log("完成打开一级UI")        
        //移除之前的界面
        while(this.mainConn.numChildren>1){
            this.mainConn.removeChildAt(0);
            
        }
        this.isUiTweeing=false;

    }

    /**
     * 打开一个二级界面
     * 
     */    
    private openSecondUI():void{

    }

}   