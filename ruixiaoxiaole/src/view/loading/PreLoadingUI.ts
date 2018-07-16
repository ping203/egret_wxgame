
/**
 * 游戏加载之前的UI显示
 * 用于提高用户体验
 * 
 */
class PreLoadingUI extends egret.Sprite{
    //背景图
    private preLoadingBg:egret.Bitmap;

    public constructor(){
        super();
        this.createView();
    }


    private createView(){
        this.preLoadingBg=new egret.Bitmap();
        this.preLoadingBg.texture=RES.getRes('logo_png');
        this.addChild(this.preLoadingBg);
        ViewUtils.setCenter(this.preLoadingBg);
    }

}   