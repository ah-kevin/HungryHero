/**
 * Created by lennon on 15/8/30.
 * Hero.js
 */
//2015年8月30日 15:51
var Hero = cc.Sprite.extend({
    _animation:null,
    state:0,
    _fast:false,
    ctor:function () {
        //继承父类
        this._super();
        this.init();
    },
    init: function () {
        this._super("#fly_0001.png");
        this._animation=new cc.Animation();
        for(var i=1;i<20;i++){
            this._animation.addSpriteFrame(cc.spriteFrameCache.
                getSpriteFrame("fly_00"+(i<10?('0'+i):i)+".png"));
        }
        this._animation.setDelayPerUnit(1/20);
        var action=cc.animate(this._animation).repeatForever();
        this.runAction(action);
         return true;
    },
    toggleSpeed: function (fast) {
        if(fast==this._fast)
            return;
            this._fast=fast;
        this.stopAllActions();
        if(!fast){
            this._animation.setDelayPerUnit(1/20);
        }else{
            this._animation.setDelayPerUnit(1/60);
        }
        var action=cc.animate(this._animation).repeatForever();
        this.runAction(action);
    }
});
