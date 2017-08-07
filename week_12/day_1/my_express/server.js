//my_server.js

var express = require('express')
var app = express()

var jsonData = {
  name: 'Reece',
  age: 31
}

app.get('/data', function(req, res){
  res.json(jsonData)
})

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})

app.listen(3000, function(){
  console.log('App running on port: ' + this.address().port)
})

app.use(express.static('public'))
