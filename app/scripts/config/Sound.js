/**
 * Created by lennon on 15/8/27.
 * Sound.js
 */
var Sound={
    //静音开光
    silence:true,
    _eatEffect:0,
    playMenuBgMusic: function () {
        if(!Sound.silence){
            cc.audioEngine.playMusic("res/sounds/bgWelcome.mp3",true);
        }
    },
    toggleOnOff: function () {
        if(Sound.silence){
            Sound.silence=false;
            cc.audioEngine.setEffectsVolume(1);
            cc.audioEngine.setMusicVolume(1);
        }else{
            Sound.silence=true;
            cc.audioEngine.setEffectsVolume(0);
            cc.audioEngine.setMusicVolume(0);
        }
    }

};