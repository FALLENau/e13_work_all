var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest()
  request.addEventListener('load', callback)
  request.open('GET', url)
  request.send()
}

var beers

var requestComplete = function() {
  if (this.status !== 200) return;

  var jsonString = this.responseText
  beers = JSON.parse(jsonString)
  populateList(beers)
}

var populateList = function() {
  var ul = document.querySelector("#info-field")
  beers.forEach(function(beer) {
    var li = document.createElement("li")
    li.classList.add("beer-item")
    li.innerText = beer.name
    ul.appendChild(li)
  });
  console.log(this)
}

var app = function () {
  var url = "https://api.punkapi.com/v2/beers"
  makeRequest(url, requestComplete)

  var beerSelect = document.querySelector("#beer-list")
}


window.addEventListener('load', app)
