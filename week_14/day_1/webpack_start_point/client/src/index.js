var React = require('react')
var ReactDom = require('react-dom')

window.onload = function(){
  // var header = React.createElement('h1', null, 'Welcome to React!')

  appDiv = document.querySelector('#app')

  ReactDom.render(
    <h1>Welcome to the new dom</h1>,
    appDiv
  )
}
