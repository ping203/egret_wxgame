
/**
 * 加载界面
 */
class LoadingUI extends eui.Component{
    //动态显示加载进度的文本
    private labelLoadingTxt:eui.Label;
    //进度条图片
    private imageLoadingProgress:eui.Image;

    //当前进度
    private currNum:number;
    //总进度
    private total:number;

    public setCurrNum(curr:number):void{
        this.currNum=curr;
    }

    public setTotalNum(total:number):void{
        this.total=total;
    }
    

    public constructor(){
        super();
        this.skinName='loadingUISkin'
        this.createView();
        this.addEventListener(egret.Event.ENTER_FRAME,this.updateProgress,this);
    }

    private createView():void{
        //指定的皮肤文件
        this.imageLoadingProgress.width=30;

    }


    /**
     * 动态设置当前进度
     */
    public updateProgress():void{      
        console.log(this.currNum,this.total)
        this.labelLoadingTxt.text=`加载中...${this.currNum}/${this.total}`
        this.imageLoadingProgress.width= (this.currNum / this.total) * 300;
    }

    /**
     * 各种清除
     */
    public clear():void{
        this.removeEventListener(egret.Event.ENTER_FRAME,this.updateProgress,this)

    }

}