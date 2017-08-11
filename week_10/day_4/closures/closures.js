// var setupAddFunction = function(modifier) {
//   var counter = 0
//   return function() {
//     counter += modifier
//     console.log(counter)
//   }
// }

// var addFive = setupAddFunction(5)
// console.log("The value of add is: ", addFive)// prints function out
//
// addFive()//logs out 1
// addFive()//logs out 2
// addFive()//logs out 3

//console.log(add())//logs out undifined becuz var counter doesn't
//exist out side of function

// var addTen = setupAddFunction(10)
//
// addTen()
// addTen()
// addTen()

var setupConversation = function() {
  var messages = []

  return function(msg) {
    messages.push(msg)
    return messages;
    // console.log(messages)
  }
}

//jarrod solution
// var setupConversation = function() {
//   var messages = []
//   return function (newMsg) {
//     messages.push(newMsg)
//     messages.forEach(function(msg) {
//       console.log(msg)
//     })
//   }
// }

var addMessage = setupConversation()

addMessage("I've got something very important to tell you that must never be forgotten")
addMessage("Oh yeah?")
var message = addMessage("Oh, no. Wait... It's fine.")

console.log("The whole message is: ", message )
