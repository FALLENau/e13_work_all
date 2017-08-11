var assert = require("assert")

var WaterBottle = require("../water_bottle.js")
var Athlete = require("../athlete.js")



describe("Athlete", function(){

  var bottle;
  var athlete;

  beforeEach(function() {
    bottle = new WaterBottle()
    athlete = new Athlete(bottle)
  })

  it("starts at 100", function(){
    assert.strictEqual(athlete.hydration, 100)
  })

  it("distance starts at 0", function() {
    assert.strictEqual(athlete.distance, 0)
  })

  it("ran distance", function() {
    athlete.run(10)
    assert.strictEqual(athlete.distance, 10)
    assert.strictEqual(athlete.hydration, 90)
  })

  it("athlete can't run dehydrated", function() {
    athlete.run(110)
    assert.strictEqual(athlete.distance, 100)
  })

  it("athlete can rehydrate", function() {
    bottle.fill()
    athlete.run(100)
    athlete.drink()
    assert.strictEqual( bottle.volume, 90 )
    assert.strictEqual( athlete.hydration, 10 )
  })
})
