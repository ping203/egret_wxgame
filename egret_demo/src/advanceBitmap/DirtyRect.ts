

/**
 * 脏矩形
 *  
 */
class DirtyRect extends egret.DisplayObjectContainer{
    private static NUM:number=100;
    //基础的缩放值
    private static SCALE_BASE:number=0.5;
    //缩放范围
    private static SCALE_RANGE:number=0.5;
    private scaleBase:number=0;
    //所有小鸟的引用,便于管理
    private birdArray:Array<egret.Bitmap>;
    //当前运动的小鸟的索引
    private currBirdIndexArray:Array<number>;
    //运动模式
    private motionMode:number;

    //小鸟图,小图
    private smallBitmap:egret.Bitmap;

    
    //小鸟出现的范围(确保图片不会超过该矩形边框)
    private rectScope:egret.Rectangle;

    private  bgShape:egret.Shape;

    public constructor(){
        super();
        this.once(egret.Event.ADDED_TO_STAGE,this.init,this);

    }

    /**
     * 初始化
     */
    private init():void{
        this.smallBitmap=new egret.Bitmap();
        this.smallBitmap.texture=RES.getRes('small_bird_png');
        
        //产生确定数量的小鸟
        let wHalfBird:number=this.smallBitmap.width/2;
        let hHalfBird:number=this.smallBitmap.height/2;

        this.rectScope=new egret.Rectangle(
            wHalfBird*DirtyRect.SCALE_BASE,
            hHalfBird*DirtyRect.SCALE_BASE,
            this.stage.stageWidth-wHalfBird*DirtyRect.SCALE_BASE*2,
            this.stage.stageHeight-hHalfBird*DirtyRect.SCALE_BASE*2
        );

        this.birdArray=new Array<egret.Bitmap>();
        for(let i=0;i<DirtyRect.NUM;i++){
            let bird:egret.Bitmap=new egret.Bitmap();
            bird.texture=RES.getRes('small_bird_png');
            //设置锚点
            bird.anchorOffsetX=wHalfBird;
            bird.anchorOffsetY=hHalfBird;
            //给一个随机的位置
            bird.x=this.rectScope.x+this.rectScope.width*Math.random();
            bird.y=this.rectScope.y+this.rectScope.height*Math.random();
            console.log(bird.x,bird.y)
            bird.scaleX=bird.scaleY=DirtyRect.SCALE_BASE;
            this.birdArray.push(bird);
            this.addChild(bird);
        }
        
         /// 随机取三个位置的白鹭小鸟并且确保深度最高
        this.currBirdIndexArray = new Array<number>();
        this.currBirdIndexArray.push( Math.floor( DirtyRect.NUM * Math.random() ) );
        this.currBirdIndexArray.push( Math.floor( DirtyRect.NUM * Math.random() ) );
        this.currBirdIndexArray.push( Math.floor( DirtyRect.NUM * Math.random() ) );

        this.setChildIndex(this.birdArray[this.currBirdIndexArray[0]], this.numChildren - 3 );
        this.setChildIndex(this.birdArray[this.currBirdIndexArray[1]], this.numChildren - 4 );
        this.setChildIndex(this.birdArray[this.currBirdIndexArray[2]], this.numChildren - 5 );

        
        

        //产生动画
        //进入新的一帧的监听，监听此事件会在下一帧开始时触发一次回调
        this.stage.addEventListener(egret.Event.ENTER_FRAME,(event:egret.Event)=>{
            
            for(let i=0;i<DirtyRect.NUM;i++){
                this.birdArray[i].cacheAsBitmap=false;
                //旋转并伴随的缩放
                let scale:number = DirtyRect.SCALE_BASE + Math.abs( Math.sin( this.scaleBase += 0.03 )) * DirtyRect.SCALE_RANGE;
                if(i%2==0){
                    this.birdArray[i].rotation+=3;
                    this.birdArray[i].scaleX=scale;
                    this.birdArray[i].scaleY=scale;
                }else{
                    this.birdArray[i].rotation-=20;
                    this.birdArray[i].scaleX=scale;
                    this.birdArray[i].scaleY=scale;
                }
                
                // this.birdArray[this.currBirdIndexArray[1]].rotation-=3;
                // this.birdArray[this.currBirdIndexArray[2]].rotation+=3;
                
                // this.birdArray[i].scaleX=this.birdArray[i].scaleY=scale;
                
                // this.birdArray[this.currBirdIndexArray[1]].scaleX=this.birdArray[this.currBirdIndexArray[1]].scaleY=scale;
                // this.birdArray[this.currBirdIndexArray[2]].scaleX=this.birdArray[this.currBirdIndexArray[2]].scaleY=scale;
            }
            


        },this);
    }
}
