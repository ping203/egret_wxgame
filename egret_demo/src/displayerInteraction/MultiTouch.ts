


/**
 * 多点触控demo
 * 
 */
class MultiTouch extends egret.DisplayObjectContainer{

    private showBird:egret.Bitmap;

    //多点触摸的位置集合
    private touchPoints:Object={names:[]}
    

    //位移
    private distance:number=0

    //当前的触控点个数
    private touchConn:number=0;
    
    private defAngle:number=0;
    
    private currentBirdRotation:number=0
    
    public constructor(){
        super()
        this.once(egret.Event.ADDED_TO_STAGE,this.init,this);

    }
    
    /**
     * 初始化
     */
    private init():void{    
        this.showBird=new egret.Bitmap();
        this.showBird.texture=RES.getRes('demo_pic_png');
        //设置锚点
        this.showBird.anchorOffsetX=this.showBird.width/2;
        this.showBird.anchorOffsetY=this.showBird.height/2;
        this.showBird.x=this.stage.stageWidth/2;
        this.showBird.y=this.stage.stageHeight/2;
        this.showBird.touchEnabled=true;
        
        this.addChild(this.showBird);   
        
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchDown,this)
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMove,this)
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.touchUp,this)

    }

    /**
     * 手指按下
     */
    private touchDown(event:egret.TouchEvent):void{
        console.log('touch id:',+event.touchPointID);
        if(this.touchPoints[event.touchPointID]==null){ 
            this.touchPoints[event.touchPointID]=new egret.Point(event.stageX,event.stageY);
            this.touchPoints["names"].push(event.touchPointID)
        }

        this.touchConn++;
        
        if(this.touchConn==2){
            this.distance=this.getInstance();
            console.log('查看下distance:'+this.distance)
            this.defAngle=this.getDefAngle()
            console.log('查看下手指触摸的角度:'+this.defAngle)
            console.log('查看下小鸟的旋转角度:'+this.showBird.rotation);
            
        }

    }

    /**
     * 手指移动
     */
    private touchMove(event:egret.TouchEvent):void{

    }

    /**
     * 手指抬起
     */
    private touchUp(event:egret.TouchEvent):void{

    }


    /**
     * 获取位移值
     */
    private getInstance():number{
        let distance:number=0;
        let names=this.touchPoints["names"] 
        //获取到两个触控点的位移距离
        distance=egret.Point.distance(this.touchPoints[names[names.length-1]],this.touchPoints[names[names.length-2]]);

        return distance;
    }


    private c:number=2*Math.PI/360;
    /**
     * 获取角度值
     */
    private getDefAngle():number{
        let angle:number;
        let names=this.touchPoints['names'];
        let p1:egret.Point=this.touchPoints[names[names.length-1]]
        let p2:egret.Point=this.touchPoints[names[names.length-2]]

        angle=Math.atan2(p1.y-p2.y,p1.x-p2.x)/this.c;
        return angle
    }
}