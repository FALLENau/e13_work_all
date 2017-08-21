//array example of deconstructing
let a, b = [1, 2]
//new short hand for below

let a = [1, 2][0]
let b = [1, 2][1]
//

//obj
const person = {
  firstName: "Jane",
  lastName: "Doe"
}

const{firstName: f, lastName: l} = person
console.log(f, l);
//f and l become a short hand for the objects values firstName, lastName
