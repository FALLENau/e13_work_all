// var myPerson = Object.create(null);
//
// myPerson.walk = function() {
//   console.log("I am walking")
// }
//
// myPerson.walk()

// var wisePerson = {
//   wisdom: function() {
//     console.log("commits often")
//   }
// }
//
// var myPerson = Object.create(wisePerson)
// myPerson.walk = function() {
//   console.log("I am walking")
// }
//
// myPerson.wisdom()//inherating wisePerson thought myPerson

var Fish = function(name, color) {
  this.name = name
  this.color = color
  //this.swim = func moved to prototype
}

Fish.prototype.swim = function() {
  console.log(this.name + " Splash!")
}

// Fish.prototype = {
//   swim: function() {
//     console.log(this.name + " Splash!")
//   }
// } // this overided the inherated prototype so be every aware of what your overiding

var myFish = new Fish("Jamie", "Orange")
myFish.swim()

console.log(Object.getPrototypeOf(myFish))//terminal prototype printout meth
