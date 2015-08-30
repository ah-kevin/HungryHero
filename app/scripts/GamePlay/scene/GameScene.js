/**
 * Created by Lennon on 15/8/27.
 */
//2015年8月30日 16:01
var GameScene = cc.Scene.extend({

    ctor:function () {
        //继承父类
        this._super();

        var layer=new cc.Layer();
        this.addChild(layer);

        this._background=new GameBackground();
        layer.addChild(this._background);

        this._hero=new Hero();
        this.addChild(this._hero);

        this.itemBatchLayer = new cc.SpriteBatchNode("res/graphics/texture.png");
        this.addChild(this.itemBatchLayer);

        this._ui = new GameSceneUI();
        this.addChild(this._ui);
        this._ui.update();

        this.init();
    },
    init: function () {
        Sound.stop();
        Sound.playGameBgMusic();
        var winSize = cc.director.getWinSize();

        Game.user.lives = GameConstants.HERO_LIVES;
        Game.user.score = Game.user.distance = 0;
        Game.gameState = GameConstants.GAME_STATE_IDLE;
        Game.user.heroSpeed = this._background.speed = 0;

        this._hero.x = -winSize.width/2;
        this._hero.y = winSize.height/2;

        this.scheduleUpdate();

    },
    update: function (elapsed) {
        var winSize=cc.director.getWinSize();
        switch(Game.gameState) {
            case GameConstants.GAME_STATE_IDLE:
                // Take off.
                if (this._hero.x < winSize.width * 0.5 * 0.5) {
                    this._hero.x += ((winSize.width * 0.5 * 0.5 + 10) - this._hero.x) * 0.05;

                    Game.user.heroSpeed += (GameConstants.HERO_MIN_SPEED - Game.user.heroSpeed) * 0.05;
                    this._background.speed = Game.user.heroSpeed * elapsed;
                }
                else {
                    Game.gameState = GameConstants.GAME_STATE_FLYING;
                    this._hero.state = GameConstants.HERO_STATE_FLYING;
                }
                this._ui.update();
                break;
        }
    }
});
