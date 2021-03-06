/**
 *
 * Created by lennon on 15/8/30.
 * GameSceneUI.js
 */
//2015年8月30日 14:38
var GameSceneUI = cc.Layer.extend({
    _lifeText: null,
    _scoreText: null,
    _distanceText: null,
    ctor: function () {
        //继承父类
        this._super();
        this.init();
    },
    init: function () {
        var fnt = "res/fonts/font.fnt";
        var winsize = cc.director.getWinSize();

        var lifeLabel = new cc.LabelBMFont("LIVES", fnt);
        this.addChild(lifeLabel);
        lifeLabel.x = 360;
        lifeLabel.y = winsize.height - 25;

        this._lifeText = new cc.LabelBMFont("0", fnt);
        this.addChild(this._lifeText);
        this._lifeText.x = 360;
        this._lifeText.y = winsize.height - 60;

        var distanceLabel = new cc.LabelBMFont("DISTANCE", fnt);
        this.addChild(distanceLabel);
        distanceLabel.x = 680;
        distanceLabel.y = winsize.height - 25;

        this._distanceText = new cc.LabelBMFont("0", fnt);
        this.addChild(this._distanceText);
        this._distanceText.x = 680;
        this._distanceText.y = winsize.height - 60;

        var scoreLabel = new cc.LabelBMFont("SCORE", fnt);
        this.addChild(scoreLabel);
        scoreLabel.x = 915;
        scoreLabel.y = winsize.height - 25;

        this._scoreText = new cc.LabelBMFont("0", fnt);
        this.addChild(this._scoreText);
        this._scoreText.x = 915;
        this._scoreText.y = winsize.height - 60;

        var pauseButton = new cc.MenuItemImage("#pauseButton.png", "#pauseButton.png", this._pauseResume);

        var soundButton = new SoundButton();
        var menu = new cc.Menu(soundButton, pauseButton);
        menu.alignItemsHorizontallyWithPadding(30);
        menu.x = 80;
        menu.y = winsize.height - 45;
        this.addChild(menu);

        return true;
    },
    _pauseResume: function () {
        if(cc.director.isPaused()){
            cc.director.resume();
        }else{
            cc.director.pause();
        }
    },
    update: function () {
        this._lifeText.setString(Game.user.lives.toString());
        this._distanceText.setString(parseInt(Game.user.distance).toString());
        this._scoreText.setString(Game.user.score.toString());
    }
});
