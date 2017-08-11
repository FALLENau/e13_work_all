// var bottle = new WaterBottle()

var Athlete = function(bottle) {
  this.bottle = bottle
  this.hydration = 100
  this.distance = 0
}

Athlete.prototype.run = function(distance) {
  if (this.hydration < distance){
    distance = this.hydration
  }
  this.distance += distance
  this.hydration -= distance
}

Athlete.prototype.drink = function() {
  this.bottle.drink()
  this.hydration += 10
}



module.exports = Athlete
