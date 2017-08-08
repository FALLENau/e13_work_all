var express = require('express');
var dogRouter = new express.Router();

var dogs = ["Molly Golden", "Corgi", "German Shep", "Aussie"]

dogRouter.post('/', function(req, res){
  dogs.push(req.body.dog)
  res.json({data: dogs})
})

dogRouter.put('/:id', function(req, res){
  dogs[req.params.id] = req.body.dog
  res.json({date: dogs})
})

dogRouter.delete('/:id', function(req, res){
  dogs.splice(req.params.id, 1)
  res.json({date: dogs})
})

dogRouter.get('/:id', function(req, res){
  res.json({data: dogs[req.params.id]})
})

dogRouter.get('/', function(req, res){
  res.json(dogs)
})

module.exports = dogRouter;
