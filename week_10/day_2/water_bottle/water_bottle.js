var WaterBottle = function(){
  this.volume = 0
}

WaterBottle.prototype.fill = function(){
  this.volume = 100
}
WaterBottle.prototype.empty = function(){
  this.volume = 0
}
WaterBottle.prototype.drink = function(){
  if (this.volume < 10) {
   return
  }
  else
  {
  this.volume -= 10
  }
}



module.exports = WaterBottle
