var myObject = {  shape: "circle" }

myObject.radius = 10

console.log( myObject )

var myObject = new Object()

myObject.shape = "square"

console.log( myObject )

var House = function( squareFeet, bathrooms, bedrooms ) {
  this.squareFeet = squareFeet
  this.bathrooms = bathrooms
  this.bedrooms = bedrooms
  this.numberOfRooms = function() {
    return( this.bathrooms + this.bedrooms )
  }
}

var house1 = new House( 2000, 1, 2 )//with out the 'new' the Obj won't have a 'return'
var house2 = new House( 3000, 2, 3 )

console.log( house1.numberOfRooms() )
console.log( house2.numberOfRooms() )


var Planet = function(name) {
  this.name = name
}//constructor

var mercury = new Planet('mercury')
var venus = new Planet('Venus')
var earth = new Planet('Earth')
var mars = new Planet('Mars')
var jupiter = new Planet('Jupiter')
var saturn = new Planet('Saturn')
var uranus = new Planet('Uranus')
var netptune = new Planet('Netptune')

var SolarSystem = function(add) {
  this.planets = [/*mercury, venus, earth, mars, jupiter, saturn, uranus*/]
  this.addPlanet = function(planet) {
    this.planets.push(planet)
  }
}//constructor with function

var solarSystem1 = new SolarSystem()
solarSystem1.addPlanet(mercury)
solarSystem1.addPlanet(venus)
solarSystem1.addPlanet(earth)
solarSystem1.addPlanet(mars)
solarSystem1.addPlanet(jupiter)
solarSystem1.addPlanet(saturn)
solarSystem1.addPlanet(uranus)
solarSystem1.addPlanet(netptune)

console.log(solarSystem1)
