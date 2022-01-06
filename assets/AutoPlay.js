function AutoPlay(){
  AutoPlay.prototype.run = function(player){
    player.state.isPlat=true;
    player.mute()
    //player.unmute()
    player.play()
  }
}
export default AutoPlay