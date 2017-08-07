var express = require('express');
var app = express();

var cats = ["Bengal", "British Shorthair", "Siamese"]


app.get('/', function(req, res) {
  res.json({ data: 'Sup!'});
});

app.get('/cats/:id', function(req, res){
  res.json({data: cats[req.params.id]})
})

app.get('/cats', function(req, res){
  res.json(cats)
})

app.listen(3000, function() {
  console.log('App running on port ' + this.address().port);
});
