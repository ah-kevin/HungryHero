/**
 * Created by Lennon on 15/8/27.
 */
var AboutScene = cc.Scene.extend({
    ctor: function () {
        this._super();
        var layer = new cc.Layer();
        this.addChild(layer);

        var winSize = cc.director.getWinSize();
        var bgWelcome = new cc.Sprite("res/graphics/bgWelcome.jpg");
        bgWelcome.x = winSize.width / 2;
        bgWelcome.y = winSize.height / 2;
        layer.addChild(bgWelcome);

        var abouText = "Lennon Ke";

        var helloLabel = new cc.LabelTTF(abouText, "Arial", 18);
        helloLabel.x = winSize.width / 2;
        helloLabel.y = winSize.height / 2;
        layer.addChild(helloLabel);

        var backButton = new cc.MenuItemImage("#about_backButton.png", "#about_backButton", this._back);
        backButton.x = 15;
        backButton.y = -70;
        var menu = new cc.Menu(backButton);
        layer.addChild(menu);

        return true;
    },
    _back: function () {
        Sound.playCoffee();
        cc.director.runScene(new MenuScene());
    }
});
