const instructors = ["Darren", "Sandy", "Jarrod"]

//Old way
function instructorsToString() {
  return "The C13 instructors are " + instructors[0] + ", " + instructors[1] + " and " + instructors[2]
}

//es6 way(new)
function instructorsToString() {
  return `The C13 instructors are ${ instructors[0]}`
}
