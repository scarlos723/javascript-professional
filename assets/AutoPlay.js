function AutoPlay(){
  AutoPlay.prototype.run = function(player){
    
    player.mute()
    //player.unmute()
    player.play()
  }
}
export default AutoPlay