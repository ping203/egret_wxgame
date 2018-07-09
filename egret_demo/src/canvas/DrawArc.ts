

/**
 * 画圆弧
 * 基于画弧api,实现圆形遮罩功能
 * 
 */
class DrawArc extends egret.DisplayObjectContainer{


    private maskShape:egret.Shape;
    private showBitmap:egret.Bitmap;

    public constructor(){
        super();
        this.once(egret.Event.ADDED_TO_STAGE,this.init,this);
    }

    /**
     * 初始化
     */
    private init():void{
        this.maskShape=new egret.Shape();

        this.showBitmap=new egret.Bitmap();
        this.showBitmap.texture=RES.getRes('demo_pic_png');
        this.addChild(this.showBitmap);
        this.showBitmap.x=this.stage.stageWidth/2-100;
        this.showBitmap.y=this.stage.stageHeight/2-100;
        this.showBitmap.mask=this.maskShape;

        //开始动态绘制圆弧
        let shape:egret.Shape=this.maskShape;
        let angle:number=0;
        let i:number=1;
    
        egret.startTick(function(timeStamp:number):boolean{
            changeAngle(angle);
            angle+=1;
            if(angle>=360){
                angle=angle%360;
                i*=-1;
            }

            return false;
        },this);         

        /**
         * 动态的改变角度
         */
        function changeAngle(angle:number):void{
            shape.graphics.clear();
            shape.graphics.beginFill(0x0094ff,1);
            shape.graphics.moveTo(0,0);
            shape.graphics.lineTo(200,0);
            shape.graphics.drawArc(0,0,200,0,angle*Math.PI/180,i==-1);
            shape.graphics.lineTo(0,0);
            shape.graphics.endFill();
        }

    }

    /**
     * 初始化画板
     */
    private initGraphics():void{


    }

}