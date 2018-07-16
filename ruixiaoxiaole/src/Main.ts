//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////  


class Main extends eui.UILayer {

    private loadingUI:LoadingUI
    private preloadUI:PreLoadingUI;

    protected createChildren(): void {
        super.createChildren();
        this.init();
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    /**
     * 初始化
     */
    private init():void{
        GlobalData.GameStage=this.stage;
        GlobalData.GameStageWidth=this.stage.width; //egret.MainContext.instance.stage.stageWidth;
        GlobalData.GameStageHeight=this.stage.height; //egret.MainContext.instance.stage.stageHeight;

    }

    private async runGame() {
        await this.loadResource()
        // this.createGameScene();
        const result = await RES.getResAsync("description_json")
        // this.startAnimation(result);
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);
    }

    /**
     * 加载资源 
     */
    private async loadResource() {
        try {
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigLoadComplete,this)
            await RES.loadConfig("resource/default.res.json", "resource/"); 

            // const loadingView = new LoadingUI();
            // this.stage.addChild(loadingView);
            
            // await this.loadTheme();
            // await RES.loadGroup("preload", 0, loadingView);
            // this.stage.removeChild(loadingView);
            

        }
        catch (e) {
            console.error(e);
        }
    }

    /**
     * 加载主题
     */
    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        }).then(()=>{
            RES.loadGroup("loading");
        })
    }

    /**
     * config加载完成的回调
     */
    private onConfigLoadComplete(event:RES.ResourceEvent):void{
        //移除config加载的监听
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigLoadComplete,this);

        //添加resource的监听
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResouceLoadComplete,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceLoadProgress,this);
        RES.loadGroup('preload')
    }   

    /**
     * resource加载错误的回调
     */
    private onResourceLoadError(event:RES.ResourceEvent):void{

    }


    /**
     * 资源正在加载的回调
     */
    private onResourceLoadProgress(event:RES.ResourceEvent):void{
        if(event.groupName=='game'){
            //在加载游戏资源的时候显示loadingUI
            // console.log('当前加载进度:'+event.itemsLoaded, '总进度:'+event.itemsTotal)
            this.loadingUI.setCurrNum(event.itemsLoaded);
            this.loadingUI.setTotalNum(event.itemsTotal);
        }    


    }

    /**
     * resource加载完成的回调
     */
    private onResouceLoadComplete(event:RES.ResourceEvent):void{
        if(event.groupName=='preload'){
            //预加载完成 先将logo显示一下
            this.preloadUI=new PreLoadingUI();
            this.addChild(this.preloadUI);
            this.loadTheme();

        }else if(event.groupName =='loading'){
            //loading需要的资源加载完成，开始显示进度加载界面
            console.log('开始显示加载界面')
            RES.loadGroup('game');
            this.removeChild(this.preloadUI)
            this.loadingUI=new LoadingUI();
            this.addChild(this.loadingUI); 

        }else if(event.groupName=='game'){
            //清除掉加载的界面
            if(this.contains(this.loadingUI)){
                this.removeChild(this.loadingUI)
                this.loadingUI.clear();
            }
            //显示游戏主场景页面
            UIManager.getInstance().startGame();
            this.clear()
        }
        
    }   

    /**
     * 各种清除
     */
    private clear():void{
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResouceLoadComplete,this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceLoadProgress,this);
        this.loadingUI = null;
        this.preloadUI=null;

    }


    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
      
    }


    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    
}
