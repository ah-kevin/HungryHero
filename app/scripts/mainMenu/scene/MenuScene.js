//2015年8月27日 16:53
var MenuScene = cc.Scene.extend({

    ctor: function () {
        //继承父类
        this._super();
        this.init();
    },
    init: function () {
        //TODO 背景图片层
        var layer = new cc.Layer();
        this.addChild(layer);
        var winSize=cc.director.getWinSize();
        var bgWelcome=new cc.Sprite("res/graphics/bgWelcome.jpg");
        bgWelcome.x=winSize.width/2;
        bgWelcome.y=winSize.height/2;
        layer.addChild(bgWelcome);

        var title=new cc.Sprite("#welcome_title.png");
        title.x=800;
        title.y=555;
        layer.addChild(title);

        this._hero=new cc.Sprite("#welcome_hero.png");
        this._hero.x=-this._hero.width/2;
        this._hero.y=400;
        layer.addChild(this._hero);

        var move=cc.moveTo(2,cc.p(this._hero.width/2+100,this._hero.y)).easing(cc.easeOut(2));
        this._hero.runAction(move);

        var MMtouch=new MMtouchLayer();
        this.addChild(MMtouch);

        //添加背景音乐
        Sound.playMenuBgMusic();
        this.scheduleUpdate();
    },
    update: function (dt) {
        var currentDate=new Date();
        this._hero.y=400+(Math.cos(currentDate.getTime()*0.002))*25;


    }
});