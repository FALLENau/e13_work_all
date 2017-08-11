//prac with js function

var firstName = "Reece"
var lastName = "Jones"

var array = [firstName, lastName]

function names(first_Name, last_Name){
  return "My name is " + firstName + " " + lastName
}

console.log(names(firstName, lastName))

//

function listNames(arrayOfNames){
  for(var name of arrayOfNames){
    console.log(name)
  }
}

var animalNames = ["COW", "FISH", "HORSE"]

var farm = []

function addAnimalsToFarm(arrayOfAnimalNames){
  for(var animalName of arrayOfAnimalNames){
    farm.push(animalName)
  }
  return farm
}

console.log(addAnimalsToFarm(animalNames))

// function mood(name, mood){
//   return name + " you are " + mood
// }//if return is removed you will get a "undefined" error in the console.log
//
// console.log("the return value of mood is: ", mood("Zsolt", "in greate pain"))

// var pets = ["cat", "dog", "pika"]
//
// for (var pet in pets) {
//   console.log(pets[pet])//if pets is taken out of (pets[pet]) it will print the index not the strings
// }

//- Create a function that takes in the first name and surname, and speaks eg
//  "Howdy, I am Rick Henry"
//- Create a multiply function, returning the result.
// - Create a function that takes in an array and returns the first element.
// - Create a function that takes in a list of names of any length, and prints
//  them all to screen.
// - Create an array of animal names and a function that adds the animals to a
//  farm array and prints the names to the console.
