


/**
 * 统一的动画管理类
 */
class TweenManager {

    /**
     * 构造函数
     */
    public constructor(){


    }
    
    private static instance: TweenManager;
    public static getInstance(): TweenManager {
        if(this.instance == null) {
            this.instance = new TweenManager();
        }
        return this.instance;
    }

    //随机选取一种动画效果
    public  static TWEEN_UI_RANDOM:number=-1;
    //无动画类型
    public static TWEEN_UI_NONE:number=0;
    //平移动画类型
    public static TWEEN_UI_MOVE:number=1;
    //缩放类型动画
    public static TWEEN_UI_SCALE:number=2;
    //缩放加旋转动画类型
    public static TWEEN_UI_SCALE_ROTATW:number=3;

    //动画持续的时长
    private tweenUITime:number=500;

    
    /**
     * 对ui进行缓动进入
     */
    public uiAppearTween(ui:egret.DisplayObject,type:number,extra:number,callback:Function,thisObj:any):void{
        let tw=egret.Tween.get(ui);
        let stageWidth=GlobalData.GameStageWidth;
        let stageHeight=GlobalData.GameStageHeight;
        let xx:number=0;    //目标x
        let yy:number=0;    //目标y
        //根据类型初始化状态
        if(type==TweenManager.TWEEN_UI_MOVE){   //移动的缓动动画
            //设置ui的锚点为舞台的中心点
            ui.anchorOffsetX=stageWidth/2;
            ui.anchorOffsetY=stageHeight/2;
            if(extra==0){   //向右平移
                ui.x=-stageWidth/2;
                ui.y=stageHeight/2;
            }else if(extra==1){ //向下平移

            }else if(extra==2){ //向左平移

            }else{  //向上平移
                
            }

            if(callback!=null){
                tw.to({x:stageWidth/2,y:stageHeight/2},this.tweenUITime)
            }else{
                tw.to({x:stageWidth /2,y:stageHeight/2},this.tweenUITime).call(callback,thisObj);
            }
            
            
        }else if(type==TweenManager.TWEEN_UI_MOVE){ //缩放的缓动动画
            

        }

    }


}