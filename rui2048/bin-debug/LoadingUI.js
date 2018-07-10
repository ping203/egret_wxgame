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
//# sourceMappingURL=LoadingUI.js.map