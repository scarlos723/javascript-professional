function MediaPlayer(config){
  this.media = config.el
  this.state = {
    isPlay:false,
    isMuted:true
  }
  this.plugins = config.plugins || [] //si no se pasa por props, se inicia vacio

  this._initPlugins()
}
MediaPlayer.prototype._initPlugins=function(){
  this.plugins.forEach(element => {
    element.run(this);
  });
}
MediaPlayer.prototype.play = function(){
  this.media.play()
  this.state.isPlay=true
}
MediaPlayer.prototype.pause=function(){
  this.media.pause()
  this.state.isPlay=false
}
MediaPlayer.prototype.checkState = function(_player){
  if(this.state.isPlay){
    _player.pause()
  }else{
    _player.play()
  }
}
MediaPlayer.prototype.mute = function(){
  this.media.muted=true;
}
MediaPlayer.prototype.unmute = function(){
  this.media.muted=false;
}
export default MediaPlayer