# es6 intro and Framework: REACT


##part 1: es6

```sh
mkdir es6
```

### classes.js

```sh
touch classes.js
```

Old way without classes
```js
var Cow = function (name) {
  this.name = name
}


Cow.prototype.moo = function () {
  return "MOO!"
}
```

es6(new js) way with classes
```js
class Cow {

  constructor(name) {
    this.name = name
  }

  moo() {
    return "MOO!"
  }

}//classes can extends classes just
//like java and ruby

var cow = new Cow("Daisy")
console.log(cow.moo())
```

### const_let.js

<br>
```sh
touch const_let.js
```

```js
var myMoney = 10//myMoney holds int of 10
// const ourMoney = 10//ourMoney holds int of 10 forever!
// myMoney = 9//myMoney now has 9
// let myMoney = 10//makes let almost the same as var but will only scope to a four loop or any other small like files

if (myMoney > 10){
  var taxHaven = myMoney * myMoney
}

console.log(taxHaven)
```

```js
```


### default_params.js
<br>

```sh
touch default_params.js
```

with old JS

```js
const showMood = function(inputName, inputMood) {
  const name = inputName || "Darren"
  const mood = inputMood || "sad that you skipped a param"
  console.log(name, "is", mood);
}

showMood()
showMood("Zsolt")
showMood("Sandy", "Fine")
```
<br>
with es6(new js)
```js

const showMood = function(
  name="Darren",
  mood="sad"
) {
  console.log(name, "is", mood);
}

showMood()
showMood("Zsolt")
showMood("Sandy", "Fine")
```

### arrow_functions.js

```sh
touch arrow_functions.js
```

```js
const numbers = [1, 2, 3, 4, 5]

//old map
const squaredNumber = numbers.map(function(number){
  return number * number
})
```


```js
const numbers = [1, 2, 3, 4, 5]

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
```

### import_export.js

```sh
touch import_export.js
```


```js
//Old way of import and export files
// var React = require("react")
//
// module.exports = Test;

```

```js
```
### template_literals.js

```sh
touch template_literals.js
```

```js
const instructors = ["Darren", "Sandy", "Jarrod"]

//Old way
function instructorsToString() {
  return "The C13 instructors are " + instructors[0] + ", " + instructors[1] + " and " + instructors[2]
}
```
outputs: The C13 instructors are Darren, Sandy and Jarrod

```js
//es6 way(new)
function instructorsToString() {
  return `The C13 instructors are ${ instructors[0]}`
}
```
outputs same as above: The C13 instructors are Darren, Sandy and Jarrod

<br>
### touch spread_operator.js

```sh
touch spread_operator.js
```

```js
const numbers = [1, 2, 3, 4, 5]
const moreNumbers = [6, 7, 8, 9, 10]

const allNumbers = [...numbers, ...moreNumbers]
//creates a new array with with both arrays

const myArray = ["fish"]
const cloneMyArray = [...myArray]

[...number].sort()//clones and sorts a new instance

```

<br>
### touch deconstructoring.js

```sh
touch deconstructoring.js
```

```js
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

```

<br><br><br><br>

## part 2:  REACT

1. What is REACT
2. How React differs from our previous Apps
3. Some of the key feature of REACT

### Setting up REACT

```sh

```


```sh

```


```sh

```


```js

```

```js

```
