

class Main extends eui.UILayer {


    protected createChildren(): void {
        super.createChildren();

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

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    /**
     * 预加载资源
     */
    private async loadResource() {
        try {
            
            await RES.loadConfig("resource/default.res.json", "resource/");
            //预加载主题
            await this.loadTheme();
            //预加载资源
            await RES.loadGroup("preload", 0);
            // const loadingView = new LoadingUI();
            //将loading界面加入舞台
            // this.stage.addChild(loadingView);
            // this.stage.removeChild(loadingView);

        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    private textfield: egret.TextField;
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
        //初始化
        this.init();
        
        // this.createTop();

        
    }   


    /**
     * 初始化游戏数据和场景
     * 
     */
    private SW:number;  //舞台宽
    private SH:number;  //舞台高
    // private score:number;    //分数

    private init():void{
        this.SW=this.stage.width;
        this.SH=this.stage.height;
        // //利用白鹭预设的createBitmapByName创建一张图片
        // let bg=this.createBitmapByName("main_bg_png");
        // //并添加到舞台底部
        // this.stage.addChild(bg);

        //各种demo的测试
        let deepManager=new DeepManager();
        this.stage.addChild(deepManager);

    }

    /**
     * 创建顶部显示区域
     */
    private TF_score:egret.TextField;
    private createTop():void{
        //为了方便管理与设置，将分数栏独立于一个容器内
        let topContainer=new egret.DisplayObjectContainer();
        let topBg=this.createBitmapByName("main_top_bg_png");
        let scoreBg=this.createBitmapByName("main_top_score_png");
        let timeBg=this.createBitmapByName("main_top_time_png");
        let txt=new egret.TextField();
        //添加的顺序影响层级
        topContainer.addChild(topBg);
        topContainer.addChild(scoreBg);
        topContainer.addChild(timeBg);
        topContainer.addChild(txt);
         //整个分数容器在设计图中的位置
        topContainer.x = 40;
        topContainer.y = 22;
        //标题和分数在分数栏内部的位置
         scoreBg.x = 36;
         scoreBg.y = 54;
         txt.x = 100;
         txt.y = 51;
          //将分数TextField实例引用到Main类下的内部属性值，方便其他方法调用并修改分数值
        this.TF_score = txt;
        this.stage.addChild(topContainer);
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
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: Array<any>): void {
        let parser = new egret.HtmlTextParser();

        let textflowArr = result.map(text => parser.parse(text));
        let textfield = this.textfield;
        let count = -1;
        let change = () => {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            let textFlow = textflowArr[count];

            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            let tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, this);
        };

        change();
    }

}
