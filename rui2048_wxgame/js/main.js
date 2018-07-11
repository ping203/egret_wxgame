var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.loadingContent = new egret.DisplayObjectContainer();
        this.textField = new egret.TextField();
        this.textField.width = 500;
        this.textField.height = 20;
        this.textField.size = 20;
        this.textField.textAlign = egret.HorizontalAlign.CENTER;
        this.textField.x = 375 / 2 - this.textField.width / 2;
        this.textField.y = 667 / 2 - this.textField.height / 2;
        this.addChild(this.textField);
        this.loadingContent.x = 375 / 2 - this.loadingContent.width / 2;
        this.loadingContent.y = 667 / 2 - this.loadingContent.height / 2;
        //获取上下文的实例
        var context = egret.MainContext.instance.stage;
        //小圆的旋转角度
        var rotate = 0;
        //小圆的透明度
        var alpha = 0.05;
        for (var i = 0; i < 20; i++) {
            var shape = new egret.Shape();
            shape.graphics.beginFill(0x0004ff, alpha);
            shape.graphics.drawCircle(0, 0, 10);
            shape.graphics.endFill();
            shape.anchorOffsetX = 120;
            shape.anchorOffsetY = 0;
            shape.rotation = rotate;
            this.loadingContent.addChild(shape);
            rotate += 18;
            alpha += 0.05;
        }
        this.addChild(this.loadingContent);
        //监听每一帧
        this.addEventListener(egret.Event.ENTER_FRAME, this.updataData, this);
    };
    /**
     * 更新信息
     */
    LoadingUI.prototype.updataData = function (event) {
        this.loadingContent.rotation += 36;
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "\u52A0\u8F7D\u4E2D..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")
                            // this.startAnimation(result);
                        ];
                    case 2:
                        result = _a.sent();
                        // this.startAnimation(result);
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        // this.startAnimation(result);
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        console.log('开始加载');
                        loadingView = new LoadingUI();
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.addChild(loadingView);
                        this.stage.removeChild(loadingView);
                        console.log('加载结束');
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        //添加主游戏场景
        this.addChild(new GameMain());
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    Main.prototype.startAnimation = function (result) {
        var _this = this;
        var parser = new egret.HtmlTextParser();
        var textflowArr = result.map(function (text) { return parser.parse(text); });
        var textfield = this.textfield;
        var count = -1;
        var change = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var textFlow = textflowArr[count];
            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            var tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, _this);
        };
        change();
    };
    /**
     * 点击按钮
     * Click the button
     */
    Main.prototype.onButtonClick = function (e) {
        var panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
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
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
/**
 * 工具类
 */
var Utils = (function () {
    function Utils() {
    }
    /**
     * 绘制rect
     */
    Utils.createRect = function (x, y, width, height, radius, bgColor, alpha) {
        var rect = new eui.Rect(width, height, bgColor);
        rect.x = x;
        rect.y = y;
        rect.alpha = alpha;
        rect.ellipseWidth = radius;
        rect.ellipseHeight = radius;
        return rect;
    };
    /**
     * 创建一个label
     */
    Utils.createLabel = function (text, x, y, size, w, color, textAlign) {
        var label = new eui.Label();
        label.text = "" + text;
        label.x = x;
        label.y = y;
        label.width = w;
        label.bold = true;
        label.size = size;
        label.textColor = color;
        label.textAlign = textAlign;
        return label;
    };
    /**颜色 */
    Utils.numStyle = {
        "0": { "num": 0, "color": 0x7c736a, "bg": 0xcdc1b4, "size": 65 },
        "2": { "num": 2, "color": 0x7c736a, "bg": 0xeee4da, "size": 65 },
        "4": { "num": 4, "color": 0x7c736a, "bg": 0xede0c8, "size": 65 },
        "8": { "num": 8, "color": 0xfff7eb, "bg": 0xf2b179, "size": 65 },
        "16": { "num": 16, "color": 0xfff7eb, "bg": 0xf59563, "size": 62 },
        "32": { "num": 32, "color": 0xfff7eb, "bg": 0xf57c5f, "size": 62 },
        "64": { "num": 64, "color": 0xfff7eb, "bg": 0xf65d3b, "size": 62 },
        "128": { "num": 128, "color": 0xfff7eb, "bg": 0xedce71, "size": 60 },
        "256": { "num": 256, "color": 0xfff7eb, "bg": 0xedcc61, "size": 60 },
        "512": { "num": 512, "color": 0xfff7eb, "bg": 0xecc850, "size": 60 },
        "1024": { "num": 1024, "color": 0xfff7eb, "bg": 0xedc53f, "size": 50 },
        "2048": { "num": 2048, "color": 0xfff7eb, "bg": 0xeec22e, "size": 50 },
        "4096": { "num": 4096, "color": 0xfff7eb, "bg": 0x3d3a33, "size": 50 },
        "8192": { "num": 8192, "color": 0xfff7eb, "bg": 0x0c0b0a, "size": 50 },
        "16384": { "num": 16384, "color": 0xfff7eb, "bg": 0x0fbcbc, "size": 40 },
    };
    return Utils;
}());
__reflect(Utils.prototype, "Utils");
/**
 * 游戏的主场景类
 *
 */
var GameMain = (function (_super) {
    __extends(GameMain, _super);
    /**
     * 构造函数
     */
    function GameMain() {
        var _this = _super.call(this) || this;
        //游戏方格的个数
        _this.gridNum = 16;
        //格子大小
        _this.itemSize = 125;
        //格子圆角
        _this.itemRadius = 15;
        //格子的间距
        _this.itemSpace = 20;
        //数据源
        _this.gameData = [[], [], [], []];
        _this.grade = 0; //分数
        _this.running = 0;
        _this.record = 0;
        _this.bestRecord = 0;
        _this.skinName = 'Game2048Skin';
        GameMain.self = _this;
        //添加进舞台以及从舞台移除的各种监听
        _this.once(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        _this.once(egret.Event.REMOVED_FROM_STAGE, _this.removeStage, _this);
        return _this;
    }
    /**
     * 添加进舞台
     */
    GameMain.prototype.addToStage = function () {
        console.log('添加进舞台');
        //创建16个方格背景
        for (var i = 0; i < this.gridNum; i++) {
            var row = i % 4;
            var col = Math.floor(i / 4);
            var gridX = this.itemSpace + (this.itemSpace + this.itemSize) * row;
            var gridY = this.itemSpace + (this.itemSpace + this.itemSize) * col;
            var gridRect = Utils.createRect(gridX, gridY, this.itemSize, this.itemSize, this.itemRadius, 0xcdc1b4, 1);
            this.gameContent.addChild(gridRect);
        }
        //注册各种事件
        this.gameContent.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onClick, this);
        this.newGameBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onClick, this);
        this.resetGame();
    };
    /**
     * 游戏初始化
     */
    GameMain.prototype.resetGame = function () {
        /**清空 */
        for (var i = 0; i < this.gameData.length; i++) {
            for (var j = 0; j < this.gameData[i].length; j++) {
                if (this.gameData[i][j].item) {
                    this.gameData[i][j].item.setData(Utils.numStyle[0]);
                    this.gameData[i][j].value = 0;
                    this.removeFromParent(this.gameData[i][j].item);
                }
            }
        }
        console.log('看看清空后的游戏源数据');
        console.log(this.gameData);
        /**新建 */
        for (var i = 0; i < this.gameData.length; i++) {
            for (var j = 0; j < 4; j++) {
                if (!this.gameData[i])
                    this.gameData[i] = [];
                var data = new GridItemData();
                data.value = 0;
                data.i = 0;
                data.j = 0;
                this.gameData[i][j] = data;
            }
        }
        console.log('看看初始化后的游戏源数据');
        console.log(this.gameData);
        //随机添加两个格子
        this.addGridItem(2);
        console.log('看看添加格子后的数据');
        console.log(this.gameData);
    };
    /**
     * 随机添加格子
     */
    GameMain.prototype.addGridItem = function (size) {
        if (!this.isOver()) {
            console.log('啊哈哈哈哈');
            for (var i = 0; i < size; i++) {
                var cells = this.selectCell();
                if (!cells)
                    return;
                /**为4的概率 */
                var num = Math.random() < 0.9 ? 2 : 4;
                var grid = new ItemData();
                grid.setData(Utils.numStyle[num]);
                grid.x = cells.disX;
                grid.y = cells.disY;
                this.gameContent.addChild(grid);
                this.gameData[cells.i][cells.j].item = grid;
                this.gameData[cells.i][cells.j].value = num;
            }
        }
    };
    /**随机获取一个格子数据 */
    GameMain.prototype.selectCell = function () {
        var cells = this.usefulCell();
        /**随机获取 */
        if (cells.length) {
            var random = Math.floor(Math.random() * cells.length);
            console.log('随机添加的格子：', random);
            return cells[random];
        }
    };
    /**记录空的格子数据 */
    GameMain.prototype.usefulCell = function () {
        var cells = [];
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.gameData[i][j] && this.gameData[i][j].value == 0) {
                    this.gameData[i][j].j = j;
                    this.gameData[i][j].i = i;
                    cells.push(this.gameData[i][j]);
                }
            }
        }
        console.log('查看空格子的数组：', cells);
        return cells;
    };
    /**
     * 各种点击事件
     */
    GameMain.prototype.onClick = function (event) {
        switch (event.currentTarget) {
            case this.newGameBtn:
                this.resetGame();
                break;
            //游戏主内容面板的各种事件
            case this.gameContent:
                if (event.type == egret.TouchEvent.TOUCH_BEGIN) {
                    this.startPoint = new egret.Point(event.stageX, event.stageY);
                    this.gameContent.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onClick, this);
                }
                else if (event.type == egret.TouchEvent.TOUCH_MOVE) {
                    this.endPoint = new egret.Point(event.stageX, event.stageY);
                    var disX = this.endPoint.x - this.startPoint.x;
                    var disY = this.endPoint.y - this.startPoint.y;
                    //方向区分不太明确，忽略操作
                    if (Math.abs(disX - disY) <= 40) {
                        return;
                    }
                    // 0:上, 1:右, 2:下, 3:左
                    var direction = Math.abs(disX) > Math.abs(disY) ? (disX > 0 ? 1 : 3) : (disY > 0 ? 2 : 0);
                    this.doMove(direction);
                    this.gameContent.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onClick, this);
                }
                break;
        }
    };
    /**
     * 处理滑动逻辑
     * 0:上, 1:右, 2:下, 3:左
     */
    GameMain.prototype.doMove = function (direction) {
        var _this = this;
        console.log(this.isOver());
        if (this.isOver())
            return;
        var arr = this.getArr(direction);
        console.log('查看下数组动态分配情况:', arr);
        var nextI;
        for (var i = 0; i < arr.length; i++) {
            var _loop_1 = function (j) {
                nextI = -1;
                for (var m = j + 1; m < arr[i].length; m++) {
                    if (arr[i][m].value != 0) {
                        nextI = m;
                        break;
                    }
                }
                if (nextI !== -1) {
                    var currData = arr[i][j];
                    var nextData = arr[i][nextI];
                    var time = Math.abs(j - nextI) * 60;
                    if (currData.value == 0) {
                        this_1.running += 1;
                        var value = nextData.value;
                        currData.value = value;
                        currData.item = nextData.item;
                        nextData.item = null;
                        nextData.value = 0;
                        j--;
                        egret.Tween.get(currData.item).to({ x: currData.disX, y: currData.disY }, time).call(function () {
                            _this.running -= 1;
                            if (_this.running <= 0) {
                                _this.addGridItem(1);
                            }
                        }, this_1);
                    }
                    else if (currData.value == nextData.value) {
                        this_1.running += 1;
                        if (this_1.gameContent.getChildIndex(nextData.item) < this_1.gameContent.getChildIndex(currData.item)) {
                            this_1.gameContent.swapChildren(nextData.item, currData.item);
                        }
                        var nextItem_1 = nextData.item;
                        var curItem = currData.item;
                        var value_1 = nextData.value * 2;
                        nextData.value = 0;
                        nextData.item = null;
                        currData.value = value_1;
                        egret.Tween.get(nextItem_1).to({ x: currData.disX, y: currData.disY }, time)
                            .to({ scaleX: 1.2, scaleY: 1.2 }, 50)
                            .to({ scaleX: 0.8, scaleY: 0.8 }, 50)
                            .to({ scaleX: 1, scaleY: 1 }, 50)
                            .call(function (curItem, itemData) {
                            _this.running -= 1;
                            curItem.setData(Utils.numStyle[value_1]);
                            _this.removeFromParent(nextItem_1);
                            /**可以了*/
                            if (value_1 >= 2048) {
                                var label_1 = Utils.createLabel("\u725B\u903C\u725B\u903C" + value_1 + "!", 0, 500, 40, 640, 0xf57c5f, "center");
                                _this.addChild(label_1);
                                egret.Tween.get(label_1).to({ y: 400 }, 1200).call(function () {
                                    _this.removeFromParent(label_1);
                                }, _this);
                            }
                            /**分数显示 */
                            _this.record += value_1;
                            _this.grade += value_1;
                            var g = _this.grade;
                            var b = _this.bestRecord;
                            if (g > b) {
                                _this.bestRecord += value_1;
                                g = b;
                            }
                            if (_this.running <= 0) {
                                _this.addGridItem(1);
                                var num = _this.record;
                                _this.record = 0;
                                var label = Utils.createLabel("+" + num, 360, 100, 30, 120, 0x7c736a, "center");
                                _this.addChild(label);
                                egret.Tween.get(label).to({ y: 50 }, 300).to({ alpha: 0 }, 200).call(function (label) {
                                    _this.currScore.text = "" + _this.grade;
                                    _this.removeFromParent(label);
                                }, _this, [label]);
                                if (_this.grade > _this.bestRecord) {
                                    _this.bestRecord = _this.grade;
                                    var num_1 = _this.bestRecord;
                                    _this.bestRecord = 0;
                                    var bestLabel = Utils.createLabel("+" + num_1, 490, 100, 30, 120, 0xf59563, "center");
                                    _this.addChild(bestLabel);
                                    egret.Tween.get(bestLabel).to({ y: 50 }, 300).to({ alpha: 0 }, 200).call(function (label) {
                                        _this.bestScore.text = "" + _this.bestRecord;
                                        _this.removeFromParent(label);
                                    }, _this, [label]);
                                }
                            }
                        }, this_1, [curItem, nextItem_1]);
                    }
                }
                out_j_1 = j;
            };
            var this_1 = this, out_j_1;
            for (var j = 0; j < arr[i].length; j++) {
                _loop_1(j);
                j = out_j_1;
            }
        }
    };
    /**
     * 游戏是否结束
     */
    GameMain.prototype.isOver = function () {
        if (this.usefulCell().length > 0) {
            return false;
        }
        else {
            //左右不等 各种遍历
            for (var i = 0; i < this.gameData.length; i++) {
                for (var j = 1; j < this.gameData[i].length; j++) {
                    if (this.gameData[i][j].value == this.gameData[i][j - 1].value) {
                        return false;
                    }
                }
            }
            //上下不等 各种遍历
            for (var i = 0; i < this.gameData.length; i++) {
                for (var j = 1; j < this.gameData[i].length; j++) {
                    if (this.gameData[i - 1][j].value == this.gameData[i][j].value) {
                        return false;
                    }
                }
            }
        }
        //结束弹窗动画
        return true;
    };
    /**
     * 根据滑动方向生成四个数组
     * 方便计算
     */
    GameMain.prototype.getArr = function (direction) {
        var list = [[], [], [], []];
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                switch (direction) {
                    //上
                    case 0:
                        list[i].push(this.gameData[j][i]);
                        break;
                    //右
                    case 1:
                        list[i].push(this.gameData[i][3 - j]);
                        break;
                    //下
                    case 2:
                        list[i].push(this.gameData[3 - j][i]);
                        break;
                    //左
                    case 3:
                        list[i].push(this.gameData[i][j]);
                        break;
                }
            }
        }
        return list;
    };
    GameMain.prototype.removeFromParent = function (child) {
        if (!child || child.parent == null)
            return;
        child.parent.removeChild(child);
    };
    /**
     * 从舞台移除
     */
    GameMain.prototype.removeStage = function () {
        console.log('从舞台移除');
    };
    return GameMain;
}(eui.Component));
__reflect(GameMain.prototype, "GameMain");
var GridItemData = (function () {
    function GridItemData() {
        this.value = 0; //值    
    }
    Object.defineProperty(GridItemData.prototype, "disX", {
        /**x的位置 */
        get: function () {
            /**修改锚点为中心点用来动画处理 */
            var _half = 125 >> 1;
            var disX = 20 + (20 + 125) * this.j;
            return disX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridItemData.prototype, "disY", {
        /**y的位置 */
        get: function () {
            /**修改锚点为中心点用来动画处理 */
            var _half = 125 >> 1;
            var disY = 20 + (20 + 125) * this.i;
            return disY;
        },
        enumerable: true,
        configurable: true
    });
    return GridItemData;
}());
__reflect(GridItemData.prototype, "GridItemData");
var ItemData = (function (_super) {
    __extends(ItemData, _super);
    function ItemData() {
        var _this = _super.call(this) || this;
        _this.skinName = "GridItemSkin";
        _this.touchEnabled = false; //不能点击
        return _this;
        // this.anchorOffsetX = this.width >> 1;
        // this.anchorOffsetY = this.height >> 1;
    }
    ItemData.prototype.setData = function (data) {
        this.data = data;
        this.gridItemBg.fillColor = data.bg;
        if (data.num > 0) {
            this.gridItemTxt.visible = true;
            this.gridItemTxt.text = data.num + "";
            this.gridItemTxt.size = data.size;
            this.gridItemTxt.textColor = data.color;
        }
        else {
            this.gridItemTxt.visible = false;
        }
    };
    Object.defineProperty(ItemData.prototype, "num", {
        get: function () {
            return this.data.num;
        },
        enumerable: true,
        configurable: true
    });
    return ItemData;
}(eui.Component));
__reflect(ItemData.prototype, "ItemData");
;window.Main = Main;