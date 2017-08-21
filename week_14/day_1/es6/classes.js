////Old way without classes
//var Cow = function (name) {
//   this.name = name
// }
//
//
// Cow.prototype.moo = function () {
//   return "MOO!"
// }

////es6(new) way with classes
class Cow {

  constructor(name) {
    this.name = name
  }

  moo() {
    return "MOO!"
  }

}//classes can extends classes just like java and ruby

var cow = new Cow("Daisy")
console.log(cow.moo())
