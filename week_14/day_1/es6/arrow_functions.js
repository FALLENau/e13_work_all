const numbers = [1, 2, 3, 4, 5]

//old map
const squaredNumber = numbers.map(function(number){
  return number * number
})


//new way - remove "function" and add "=>"
const squaredNumber = numbers.map((number) => {
  return number * number
})

// const myFunc = () => {
//  //example of arrow func
// }

//the compact function 
const squaredNumber = numbers.map(num =>
  num * num
)
