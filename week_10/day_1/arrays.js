// Array types
// var myArray = []

var guitars = ["fender", "gibson", "ibanez", "yamaha"]
console.log("guitars", guitars)
//
// guitars.pop()
// guitars.push("ESP")
// console.log("guitars", guitars)
//
// guitars.shift()
// guitars.unshift("Gretsch")
// console.log("guitars", guitars)
//
// guitars[3] = "PRS"
// console.log("guitars", guitars)

var pos = guitars.indexOf('gibson')
guitars.splice(pos, 1)

console.log("guitars", guitars)
