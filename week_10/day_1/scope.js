var name = "Reece"

var talk = function(){
  var name = "Jarrod"//this var is a 'shadowing' of the name var above
  //name = "Jarrod"//this with reasign the var name to be Jarrod not Reece as global up top.
  console.log("My name is " + name)
}

talk()

console.log("The global name is: ", name)
// var walk = function(){
//   console.log(name + " is walking")
// }

// walk()
// console.log("Tying to access name: ", + name)//no longer valid
