const showMood = function(inputName, inputMood) {
  const name = inputName || "Darren"
  const mood = inputMood || "sad that you skipped a param"
  console.log(name, "is", mood);
}

showMood()
showMood("Zsolt")
showMood("Sandy", "Fine")

// const showMood = function(
//   name="Darren",
//   mood="sad"
// ) {
//   console.log(name, "is", mood);
// }
//
// showMood()
// showMood("Zsolt")
// showMood("Sandy", "Fine")
