

/**
 * 容器的使用
 */
class UseContainer extends egret.DisplayObjectContainer{

    //左右边的两个按钮
    private leftBtn:egret.TextField;
    private rightBtn:egret.TextField;

    //左右两个容器

    private leftContainer:egret.DisplayObjectContainer;
    private rightContainer:egret.DisplayObjectContainer;
    private leftRect:egret.Shape;
    private rightRect:egret.Shape;

    private showBitmap:egret.Bitmap;

    //左右容器是否可以滑动
    private leftDrag:boolean=false;
    private rightDrag:boolean=false;

    private leftOffsetX:number=0;
    private leftOffsetY:number=0;

    private rightOffsetX:number=0;
    private rightOffsetY:number=0;
    public constructor(){
        super();
        this.once(egret.Event.ADDED_TO_STAGE,this.init,this)
    }

    private init():void{

        //先初始化两个矩形框以及矩形框上面的提示信息
        //两个按钮
        this.leftBtn=new egret.TextField();
        this.leftBtn.size=28;
        this.leftBtn.textAlign=egret.HorizontalAlign.CENTER;
        this.leftBtn.textColor=0xffffff;
        this.leftBtn.background=true;
        this.leftBtn.backgroundColor=0xd71345;
        this.leftBtn.x = this.stage.stageWidth/4 - this.leftBtn.width/2;
        this.leftBtn.y = 120;
        this.leftBtn.touchEnabled = true;
        this.leftBtn.text='红色容器';
        this.addChild(this.leftBtn);


        this.rightBtn=new egret.TextField();
        this.rightBtn.size=28;
        this.rightBtn.textAlign=egret.HorizontalAlign.CENTER;
        this.rightBtn.textColor=0xffffff;
        this.rightBtn.background=true;
        this.rightBtn.backgroundColor=0x0094ff;
        this.rightBtn.x = this.stage.stageWidth/2 + this.stage.stageWidth/4 - this.rightBtn.width/2;
        this.rightBtn.y = 120;
        this.rightBtn.touchEnabled = true;
        this.rightBtn.text='蓝色容器';
        this.addChild(this.rightBtn);
        

        //初始化两个容器
        this.leftContainer=new egret.DisplayObjectContainer();
        this.addChild(this.leftContainer);

        this.leftRect=new egret.Shape();
        this.leftRect.graphics.lineStyle(10,0xd71345);
        this.leftRect.graphics.moveTo(0,0);
        this.leftRect.graphics.lineTo(200,0);
        this.leftRect.graphics.lineTo(200,300);
        this.leftRect.graphics.lineTo(0,300);
        this.leftRect.graphics.lineTo(0,0);
        this.leftRect.graphics.endFill();
        // this.addChild(this.leftRect);
        this.leftContainer.addChild(this.leftRect);
        this.leftContainer.x=40;
        this.leftContainer.y=200;
        

        this.rightContainer=new egret.DisplayObjectContainer();
        this.addChild(this.rightContainer);

        this.rightRect=new egret.Shape();
        this.rightRect.graphics.lineStyle(10,0x102b6a);
        this.rightRect.graphics.moveTo(0,0);
        this.rightRect.graphics.lineTo(200,0);
        this.rightRect.graphics.lineTo(200,300);
        this.rightRect.graphics.lineTo(0,300);
        this.rightRect.graphics.lineTo(0,0);
        this.rightRect.graphics.endFill();
        this.rightContainer.addChild(this.rightRect)
        this.rightContainer.x=350;
        this.rightContainer.y=200;


        //添加小鸟
        this.showBitmap=new egret.Bitmap();
        this.showBitmap.texture=RES.getRes('demo_pic_png');
        this.showBitmap.x=80;
        this.showBitmap.y=540;
        this.addChild(this.showBitmap);

        //左边按钮点击事件，将小鸟放进容器中
        this.leftBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,(event)=>{
            if(this.getChildIndex(this.showBitmap)!=-1){  
                //小鸟不在容器内，并且小鸟在舞台
                this.removeChild(this.showBitmap);
                this.leftContainer.addChild(this.showBitmap);
                this.showBitmap.x=(this.leftContainer.width-this.showBitmap.width)/2;
                this.showBitmap.y=20;
            }else if(this.rightContainer.getChildIndex(this.showBitmap)!=-1){     //小鸟在右边容器内
                this.rightContainer.removeChild(this.showBitmap);
                this.leftContainer.addChild(this.showBitmap);
                this.showBitmap.x=(this.leftContainer.width-this.showBitmap.width)/2;
                this.showBitmap.y=20;
            }
            this.leftContainer.touchEnabled=true;
            this.rightContainer.touchEnabled=false;
        },this)

        //点击右边按钮将小鸟放进容器中
        this.rightBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,(event)=>{
            if(this.getChildIndex(this.showBitmap)!=-1){
                this.removeChild(this.showBitmap);
                this.rightContainer.addChild(this.showBitmap);
                this.showBitmap.x=(this.rightContainer.width-this.showBitmap.width)/2;
                this.showBitmap.y=20;
            }else if(this.leftContainer.getChildIndex(this.showBitmap)!=-1){
                this.leftContainer.removeChild(this.showBitmap);
                this.rightContainer.addChild(this.showBitmap);
                this.showBitmap.x=(this.rightContainer.width-this.showBitmap.width)/2;
                this.showBitmap.y=20;
            }
            this.leftContainer.touchEnabled=false;
            this.rightContainer.touchEnabled=true;
        },this)

        this.leftContainer.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(event)=>{
            this.leftDrag=true;
            console.log('手指按下的x:',event.stageX)
            console.log('左边容器的的x:',this.leftContainer.x)
            this.leftOffsetX=event.stageX-this.leftContainer.x;
            this.leftOffsetY=event.stageY-this.leftContainer.y;

        },this);
        this.rightContainer.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(event)=>{
            this.rightDrag=true;
            
            this.rightOffsetX=event.stageX-this.rightContainer.x;
            this.rightOffsetY=event.stageY-this.rightContainer.y;

        },this);
        this.leftContainer.addEventListener(egret.TouchEvent.TOUCH_END,(event)=>{
            this.leftDrag=false;
        },this);
        this.rightContainer.addEventListener(egret.TouchEvent.TOUCH_END,(event)=>{
            this.rightDrag=false;
        },this);
        //触摸移动左边容器
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,(event)=>{
            if(this.leftDrag){
                console.log(event.stageX-this.leftOffsetX)
                this.leftContainer.x = event.stageX-this.leftOffsetX;
                this.leftContainer.y = event.stageY-this.leftOffsetY;
            }

        },this)

        //触摸移动右边容器
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,(event)=>{
            if(this.rightDrag){
                console.log(event.stageX)
                this.rightContainer.x = event.stageX-this.rightOffsetX;
                this.rightContainer.y = event.stageY-this.rightOffsetY;
            
            }
        },this)
    }

}
