// setTimeout(function() {
//   console.log("I waited for 1 second");
// }, 1000);

// var logRed = function() {
//   console.log("It's red!");
// }

// var logNotRed = function() {
//   console.log("It's NOT red!");
// }

// var redChecker = function(colour, isRed, isNotRed){
//   if(colour.toLocaleLowerCase() === "red"){
//     isRed();
//   }
//   else{
//     isNotRed();
//   }
// }//added the .toLocaleLowerCase, so actsept any type of string thathas red.

// redChecker("Red", logRed, logNotRed);

// var logRed = function(message) {
//   console.log(message);
// }
//
// var logNotRed = function() {
//   console.log("It's NOT red!");
// }
//
// var redChecker = function(message, colour, isRed, isNotRed){
//   if(colour.toLocaleLowerCase() === "red"){
//     isRed(message);
//   }
//   else{
//     isNotRed();
//   }
// }
//
// redChecker("Print out this new message please!", "red", logRed, logNotRed);

// var callback = function(number){
//   console.log("My number is " + number)
// }
// var functionCaller = function(myCallback, num){
//   myCallback(num)
// }
//
// functionCaller(callback, 7)

// var getSomethingFromShop= function(budget, callback) {
//   console.log("I have " + budget + " to go to the shop with")
//   var wanted = "Start Bar"
//   var got = "Curly Wurly"
//
//   callback(wanted, got)
// }// ok "callback" is a function within a function i.e. callback(wanted, got)
// //
//
// getSomethingFromShop("£0.50", function(req, res) {
//   console.log("I wanted the " + req + " but all I got was " + res)
// })// when lowfunction is called it requires that your give arguments for the high function within the function.

// var increment = function(n) {
//   return n+1
// }
//
// var square = function(n) {
//   return n*n
// }
//
// var dosomeMaths = function(n, func) {
//   return func(n)
// }
//
// console.log(dosomeMaths(12, increment))
// console.log(dosomeMaths(12, square))

// function getTweetsAsync(callback) {
//   // api of tweets
//
//   setTimeout(function() {
//     var tweets = "These are the bomb!"
//     callback(tweets)
//   }, 1000)
// }
//
// var myTweets = "null"
// getTweetsAsync(function(tweets) {
//   myTweets = tweets
// })//no sure whats happening here...
//
// console.log(myTweets)

let add = function(a,b) {
  return a + b
}

let multi = function(a,b) {
  return a * b
}

let doWhatEver = function(a,b) {
  console.log("here is your sum back ${a}, ${b}")
}

let calc = function(num1, num2, callback) {
  if (typeof callback === "function") {
    return callback(num1, num2)
  }
}

console.log(calc(61, 21, function(a,b) {return a-b;}))
