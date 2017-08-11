var myPerson = {
  name: "Guybrush",
  age: 32,
  weapon: "cutlass",
  talk: function(){
    return "Shiver me timberrrs, my name is " + this.name
  }
}

console.log("My person: ", myPerson.name)
console.log("My age: ", myPerson.age)
console.log("My weapon: ", myPerson.weapon)

console.log(myPerson.talk())

myPerson.age = 27

console.log(myPerson.age)

myPerson.occupation = "Mighty Pirate!"
console.log(myPerson.occupation)
// console.log(myPerson["occupation"])//2nd way to print out occupation
