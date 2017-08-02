console.log("First log")


var app = function() {
  var tag = document.getElementById('intro')
  tag.innerHTML = "---------JS DOM PLAY------------"
  console.log("Second log")
}

window.addEventListener("load", app)

console.log("Third log")
