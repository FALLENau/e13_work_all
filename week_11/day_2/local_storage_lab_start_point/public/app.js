var state

var init = function () {
  state = JSON.parse(localStorage.getItem('todoList')) || [];
  var ul = document.querySelector('#todo-list');
  var button = document.querySelector('button');

  button.addEventListener('click', handleButtonClick);
  populate(ul, state);
}

var populate = function (ul, state) {
  // for each item in the state, invoke addItem
  state.forEach(function(item) {
    addItem(ul, item)
  })
}

var addItem = function (ul, newItem) {
  // add an item to the ul
  var li = document.createElement("li")
  li.innerText = newItem
  ul.appendChild(li)
}

var handleButtonClick = function () {
  // get the value of the input box
  var input = document.querySelector("#new-item")
  var text = input.value
  // get the "todo-list" ul element from the DOM
  var ul = document.querySelector("ul")
  // invoke addItem
  addItem(ul, text)
  // invoke save
  save(text)
}

var save = function (text) {
  // save the item to localStorage
  state.push(text)
  // NOTE You'll have to use JSON.stringify
  var jsonString = JSON.stringify(state)
  localStorage.setItem("todoList", jsonString)
}

window.addEventListener('load', init);

// ADVANCED: create a drop-down of many to-do lists that are stored in localStorage
// HINT: you'll have to use a different data structure (an array of objects maybe?)
