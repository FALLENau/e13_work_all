var buttonCounter = 0

var handleButtonClick = function() {
  var pTage = document.querySelector("#button-result")
  buttonCounter++
  pTage.innerText = "Whoa dude, I totally got clicked! " + buttonCounter + " times!"
}// changed button from text output into a click counter

var handleKeyPress = function() {
  var pTag = document.querySelector("#text-result")
  // var input = document.querySelector("input")
  pTag.innerText = this.value//dropped input, because input(this) isherited by the funcution
}

var handleSelectChanged = function() {
  var pTag = document.querySelector("#select-result")
  pTag.innerText = this.value + " Excellent!"
}

var app = function(){
  var button = document.querySelector("button")
  button.addEventListener("click", handleButtonClick)

  var input = document.querySelector("input")
  input.addEventListener("keyup", handleKeyPress)
  //button.onclick = handleButtonClick// is the old way to make button events and can only take in 1 command

  var select = document.querySelector("select")
  select.addEventListener("change", handleSelectChanged)
}

window.addEventListener('load', app);
