


class ViewUtils{

    /**
     * 将view置于舞台的正中央
     */
    public static setCenter(view:egret.DisplayObject):void{
	    view.x = (GlobalData.GameStage.stageWidth - view.width)/2;
	    view.y = (GlobalData.GameStage.stageHeight - view.height)/2;
        
	}
    
}