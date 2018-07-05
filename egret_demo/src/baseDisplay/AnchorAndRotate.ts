
/**
 * 锚点及旋转缩放
 */
class AnchorAndRotate extends egret.DisplayObjectContainer{

    //旋转以及缩放设定
    private static STEP_ROTATE:number=3;
    private static STEP_SCALE:number=0.03;

    private scaleBase:number=0;
    //当前的动画模式,通过触摸改变或者触发
    private animMode:number;

    //需要进行动画的图片
    private showBitmap:egret.Bitmap;
    //提示文本信息
    private showMsg:egret.TextField;


    public constructor(){
        super();
        this.once(egret.Event.ADDED_TO_STAGE,this.init,this);
    }


    private init(event:egret.Event):void{
        this.showBitmap=new egret.Bitmap();
        this.showBitmap.texture=RES.getRes('demo_pic_png');
        this.addChild(this.showBitmap);
        
        //设置显示图像的锚点
        this.showBitmap.anchorOffsetX=this.showBitmap.width/2;
        this.showBitmap.anchorOffsetY=this.showBitmap.height/2;
        this.showBitmap.x=this.stage.stageWidth/2;
        this.showBitmap.y=this.stage.stageHeight/2;
        
        //提示信息
        this.showMsg=new egret.TextField();
        this.addChild(this.showMsg);
        this.showMsg.x=100;
        this.showMsg.y=100;
        this.showMsg.size=28;
        this.showMsg.textAlign=egret.HorizontalAlign.LEFT;
        this.showMsg.textColor=0x000000;
        this.showMsg.type=egret.TextFieldType.DYNAMIC;
        this.showMsg.lineSpacing=6;
        this.showMsg.multiline=true;

        //开始播放动画
        this.launchAnim()

    }

    /**
     * 播放动画
     */
    private launchAnim():void{
        //默认是旋转动画
        this.animMode=AnimModes.ANIM_ROT;
        //添加点击事件监听
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(event:egret.TouchEvent)=>{
            this.animMode=(this.animMode+1)%3;
        },this)

        
        this.stage.addEventListener(egret.Event.ENTER_FRAME,()=>{
            switch(this.animMode){
                case AnimModes.ANIM_ROT:        //旋转动画
                    this.showBitmap.rotation+=AnchorAndRotate.STEP_ROTATE;
                    break;
                case AnimModes.ANIM_SCALE:      //缩放动画
                    this.showBitmap.scaleX = this.showBitmap.scaleY = 0.5 + 0.5* Math.abs( Math.sin( this.scaleBase += AnchorAndRotate.STEP_SCALE));
                    break;
            }

            this.showMsg.text="旋转角度:" + this.showBitmap.rotation 
                +"\n缩放比例:" + this.showBitmap.scaleX.toFixed(2)
                +"\n轻触进入" +(["缩放","静止","旋转"][this.animMode])+ "模式";
            return false;   //这时返回值表示执行结束是否立即重绘
        },this)
        
    }


}

/**
 * 动画类型枚举类
 */
class AnimModes{
    public static ANIM_ROT:number = 0;
    public static ANIM_SCALE:number = 1;
}