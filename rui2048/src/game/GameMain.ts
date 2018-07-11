
/**
 * 游戏的主场景类
 * 
 */
class GameMain extends eui.Component {

    public static self: GameMain;
    //游戏方格的个数
    private gridNum: number = 16;

    //新游戏按钮
    private newGameBtn: eui.Button;
    //游戏的主窗口
    private gameContent: eui.Group;
    //格子大小
    private itemSize: number = 125;
    //格子圆角
    private itemRadius: number = 15;
    //格子的间距
    private itemSpace: number = 20;
    //数据源
    private gameData: GridItemData[][] = [[], [], [], []]

    //开始的触摸点
    private startPoint: egret.Point;

    //结束的触摸点
    private endPoint: egret.Point;

    private currScore: eui.Label;

    private bestScore: eui.Label;


    private grade: number = 0;//分数

    /**
     * 构造函数
     */
    public constructor() {
        super();
        this.skinName = 'Game2048Skin'
        GameMain.self = this;
        //添加进舞台以及从舞台移除的各种监听
        this.once(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.removeStage, this)
    }


    /**
     * 添加进舞台
     */
    private addToStage(): void {
        console.log('添加进舞台')
        //创建16个方格背景
        for (let i = 0; i < this.gridNum; i++) {
            let row: number = i % 4;
            let col: number = Math.floor(i / 4);
            let gridX: number = this.itemSpace + (this.itemSpace + this.itemSize) * row;
            let gridY: number = this.itemSpace + (this.itemSpace + this.itemSize) * col;
            let gridRect: eui.Rect = Utils.createRect(gridX, gridY, this.itemSize, this.itemSize, this.itemRadius,
                0xcdc1b4, 1);
            this.gameContent.addChild(gridRect);
        }

        //注册各种事件
        this.gameContent.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onClick, this)
        this.newGameBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onClick, this);

        this.resetGame();

    }

    /**
     * 游戏初始化
     */
    private resetGame(): void {
        /**清空 */
        for (let i = 0; i < this.gameData.length; i++) {
            for (let j: number = 0; j < this.gameData[i].length; j++) {
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
        for (let i = 0; i < this.gameData.length; i++) {
            for (let j: number = 0; j < 4; j++) {
                if (!this.gameData[i]) this.gameData[i] = [];
                let data: GridItemData = new GridItemData();
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
    }

    /**
     * 随机添加格子
     */
    private addGridItem(size: number): void {
        if(!this.isOver()){
            console.log('啊哈哈哈哈')
            for (let i: number = 0; i < size; i++) {
            let cells: GridItemData = this.selectCell();
            if (!cells) return;
            /**为4的概率 */
            let num: number = Math.random() < 0.9 ? 2 : 4;
            let grid: ItemData = new ItemData();
            grid.setData(Utils.numStyle[num]);
            grid.x = cells.disX;
            grid.y = cells.disY;
            this.gameContent.addChild(grid);
            this.gameData[cells.i][cells.j].item = grid;
            this.gameData[cells.i][cells.j].value = num;
        }
        }
        

    }

    /**随机获取一个格子数据 */
    private selectCell(): GridItemData {
        let cells: GridItemData[] = this.usefulCell();
        /**随机获取 */
        if (cells.length) {
            let random = Math.floor(Math.random() * cells.length)
            console.log('随机添加的格子：', random)
            return cells[random];
        }
    }

    /**记录空的格子数据 */
    private usefulCell(): GridItemData[] {
        let cells: GridItemData[] = [];
        for (let i: number = 0; i < 4; i++) {
            for (let j: number = 0; j < 4; j++) {
                if (this.gameData[i][j] && this.gameData[i][j].value == 0) {
                    this.gameData[i][j].j = j;
                    this.gameData[i][j].i = i;
                    cells.push(this.gameData[i][j]);
                }
            }
        }
        console.log('查看空格子的数组：', cells)
        return cells;
    }
    /**
     * 各种点击事件
     */
    private onClick(event: egret.TouchEvent): void {

        switch (event.currentTarget) {
            case this.newGameBtn:
                this.resetGame();
                break;

            //游戏主内容面板的各种事件
            case this.gameContent:
                if (event.type == egret.TouchEvent.TOUCH_BEGIN) {   //开始触摸事件
                    this.startPoint = new egret.Point(event.stageX, event.stageY);
                    this.gameContent.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onClick, this);
                } else if (event.type == egret.TouchEvent.TOUCH_MOVE) {   //滑动事件
                    this.endPoint = new egret.Point(event.stageX, event.stageY);
                    let disX: number = this.endPoint.x - this.startPoint.x;
                    let disY: number = this.endPoint.y - this.startPoint.y;
                    //方向区分不太明确，忽略操作
                    if (Math.abs(disX - disY) <= 40) {
                        return;
                    }
                    // 0:上, 1:右, 2:下, 3:左
                    let direction: number = Math.abs(disX) > Math.abs(disY) ? (disX > 0 ? 1 : 3) : (disY > 0 ? 2 : 0);
                    this.doMove(direction);
                    this.gameContent.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onClick, this);
                }
                break;
        }

    }


    private running: number = 0;
    private record: number = 0;
    private bestRecord: number = 0;
    /**
     * 处理滑动逻辑
     * 0:上, 1:右, 2:下, 3:左
     */
    private doMove(direction: number): void {
        console.log(this.isOver())
        if (this.isOver()) return
        let arr: GridItemData[][] = this.getArr(direction);
        console.log('查看下数组动态分配情况:', arr)
        let nextI: number;
        for (let i:number = 0; i < arr.length; i++) {
            for (let j:number = 0; j < arr[i].length; j++) {
                nextI = -1;
                for (let m: number = j + 1; m < arr[i].length; m++) {
                    if (arr[i][m].value != 0) {
                        nextI = m;
                        break;
                    }
                }
                if (nextI !== -1) {
                    let currData: GridItemData = arr[i][j];
                    let nextData: GridItemData = arr[i][nextI];
                    let time = Math.abs(j - nextI) * 60;
                    if (currData.value == 0) {
                        this.running += 1;
                        let value: number = nextData.value;
                        currData.value = value
                        currData.item = nextData.item;
                        nextData.item = null;
                        nextData.value = 0;
                        j--;
                        egret.Tween.get(currData.item).to({ x: currData.disX, y: currData.disY }, time).call(() => {
                            this.running -= 1;
                            if (this.running <= 0) {
                                this.addGridItem(1);
                            }
                        }, this);
                    } else if (currData.value == nextData.value) {
                        this.running += 1;
                        if (this.gameContent.getChildIndex(nextData.item) < this.gameContent.getChildIndex(currData.item)) {
                            this.gameContent.swapChildren(nextData.item, currData.item);
                        }
                        let nextItem: ItemData = nextData.item;
                        let curItem: ItemData = currData.item;
                        let value: number = nextData.value * 2;
                        nextData.value = 0;
                        nextData.item = null;
                        currData.value = value;
                        egret.Tween.get(nextItem).to({ x: currData.disX, y: currData.disY }, time)
                            .to({ scaleX: 1.2, scaleY: 1.2 }, 50)
                            .to({ scaleX: 0.8, scaleY: 0.8 }, 50)
                            .to({ scaleX: 1, scaleY: 1 }, 50)
                            .call((curItem: ItemData, itemData: ItemData) => {
                                this.running -= 1;
                                curItem.setData(Utils.numStyle[value]);
                                this.removeFromParent(nextItem);
                                /**可以了*/
                                if (value >= 2048) {
                                    let label: eui.Label = Utils.createLabel(`牛逼牛逼${value}!`, 0, 500, 40, 640, 0xf57c5f, "center");
                                    this.addChild(label);
                                    egret.Tween.get(label).to({ y: 400 }, 1200).call(() => {
                                        this.removeFromParent(label);
                                    }, this);
                                }


                                /**分数显示 */
                                this.record += value;
                                this.grade += value;
                                let g: number = this.grade;
                                let b: number = this.bestRecord;
                                if (g > b) {
                                    this.bestRecord += value;
                                    g = b;
                                }

                                if (this.running <= 0) {
                                    this.addGridItem(1);
                                    let num: number = this.record;
                                    this.record = 0;
                                    let label: eui.Label = Utils.createLabel(`+${num}`, 360, 100, 30, 120, 0x7c736a, "center");
                                    this.addChild(label);
                                    egret.Tween.get(label).to({ y: 50 }, 300).to({ alpha: 0 }, 200).call((label) => {
                                        this.currScore.text = `${this.grade}`;
                                        this.removeFromParent(label);
                                    }, this, [label]);
                                    if (this.grade > this.bestRecord) {
                                        this.bestRecord = this.grade;
                                        let num: number = this.bestRecord;
                                        this.bestRecord = 0;
                                        let bestLabel: eui.Label = Utils.createLabel(`+${num}`, 490, 100, 30, 120, 0xf59563, "center");
                                        this.addChild(bestLabel);
                                        egret.Tween.get(bestLabel).to({ y: 50 }, 300).to({ alpha: 0 }, 200).call((label) => {
                                            this.bestScore.text = `${this.bestRecord}`;
                                            this.removeFromParent(label);
                                        }, this, [label]);
                                    }

                                }

                            },this,[curItem,nextItem])
                    }
                }

            }
        }
    }


    /**
     * 游戏是否结束
     */
    private isOver(): boolean {
        if (this.usefulCell().length > 0) {     //还有空格子，说明游戏并未结束
            return false;
        } else {      //没有空格子了，然后查看一下
            //左右不等 各种遍历
            for (let i: number = 0; i < this.gameData.length; i++) {
                for (let j: number = 1; j < this.gameData[i].length; j++) {
                    if (this.gameData[i][j].value == this.gameData[i][j - 1].value) {
                        return false;

                    }
                }
            }

            //上下不等 各种遍历
            for (let i: number = 0; i < this.gameData.length; i++) {
                for (let j: number = 1; j < this.gameData[i].length; j++) {
                    if (this.gameData[i - 1][j].value == this.gameData[i][j].value) {
                        return false;

                    }
                }
            }

        }


        //结束弹窗动画
       
        return true;
    }

    /**
     * 根据滑动方向生成四个数组
     * 方便计算
     */
    private getArr(direction: number): GridItemData[][] {
        let list: GridItemData[][] = [[], [], [], []];
        for (let i: number = 0; i < 4; i++) {
            for (let j: number = 0; j < 4; j++) {
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
    }

    /**移除组件 */11
    public removeFromParent(child: egret.DisplayObject) {
        if (!child || child.parent == null)
            return;
        child.parent.removeChild(child);
    }

    /**
     * 从舞台移除
     */
    private removeStage(): void {
        console.log('从舞台移除')

    }


}
