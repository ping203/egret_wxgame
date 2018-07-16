/**
 *
 * @author 
 *
 */
class BaseButton extends eui.Group{
    private src_str:string;
    public bg:egret.Sprite;
    private src:egret.Bitmap;
	public constructor(srcstr:string) {
    	super();
    	this.src_str = srcstr;
    	this.init();
	}
	
    private init():void
    {
        this.bg = new egret.Sprite();
        this.addChild(this.bg);
<<<<<<< HEAD
        var img: egret.Texture = RES.getRes(this.src_str);
        this.src = new egret.Bitmap(img);
=======
        var img: egret.Texture = RES.getRes(this.src_str);
        this.src = new egret.Bitmap(img);
>>>>>>> 472310ebceef6f37482b86bc1e079e1ec46c4c07
        this.bg.addChild(this.src);
	}
	
	public startTween():void
	{
        var oldY: number = this.bg.y;
        var tw = egret.Tween.get(this.bg,{loop:true});
        tw.to({ y: this.bg.y + 20},500)
            .to({ y: oldY},500).wait(100);
	}
	
	public clear():void
	{
        egret.Tween.removeTweens(this.bg);
        this.removeChildren();
        this.src_str = null;
        this.src = null;
	}
}
