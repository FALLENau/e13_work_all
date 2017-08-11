var pets = ["cat", "dog", "pika"]

for (var pet in pets) {
  console.log(pets[pet])//if pets is taken out of (pets[pet]) it will print the index not the strings
}

var x = 0

while (x < 10) {
  console.log("The loop has run", x, "times")
  x++
}
