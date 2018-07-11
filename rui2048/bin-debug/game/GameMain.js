var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
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
//# sourceMappingURL=GameMain.js.map