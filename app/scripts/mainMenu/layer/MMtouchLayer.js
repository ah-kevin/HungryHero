/**
 *Created by WebStorme.
 *User: Lennon
 *Date: 15/8/27
 *File: MMtouchLayer
 */
//2015年8月27日 17:58
var MMtouchLayer = cc.Layer.extend({

    ctor: function () {
        //继承父类
        this._super();
        this.init();
    },
    init: function () {
        var winSize=cc.director.getWinSize();
        this._playBtn = new cc.MenuItemImage("#welcome_playButton.png", "#welcome_playButton.png", this._play);
        this._playBtn.x = 700;
        this._playBtn.y = 350;

        this._aboutBtn = new cc.MenuItemImage("#welcome_aboutButton.png", "#welcome_aboutButton.png", this._about, this);
        this._aboutBtn.x = 500;
        this._aboutBtn.y = 250;
        var soundButton = new SoundButton();
        soundButton.x = 45;
        soundButton.y = winSize.height - 45;
        var menu = new cc.Menu(this._playBtn, this._aboutBtn, soundButton);  //默认都居中叠在一起
        menu.x = menu.y = 0;    //如果不设置menu位置，则自动屏幕居中。
        this.addChild(menu);
        this.scheduleUpdate();
    },
    update: function () {
        var currentDate=new Date();
        this._playBtn.y=350+(Math.cos(currentDate.getTime()*0.002))*10;
        this._aboutBtn.y=250+(Math.cos(currentDate.getTime()*0.002))*10;
    },
    _about: function () {
        cc.director.runScene(new AboutScene())
    },
    _play: function () {
        cc.director.runScene(new GameScene());
    }
});
