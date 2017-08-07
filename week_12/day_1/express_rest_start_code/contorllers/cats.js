var express = require('express')
var catRouter = new express.Router()

var cats = ["Billy Tiger", "British Shorthair", "Siamese"]

catRouter.post('/cats', function(req, res){
  cats.push(req.body.cat)
  res.json({data: cats})
})

catRouter.put('/cats/:id', function(req, res){
  cats[req.params.id] = req.body.cat
  res.json({date: cats})
})

catRouter.delete('/cats/:id', function(req, res){
  cats.splice(req.params.id, 1)
  res.json({date: cats})
})

catRouter.get('/cats/:id', function(req, res){
  res.json({data: cats[req.params.id]})
})

catRouter.get('/cats', function(req, res){
  res.json(cats)
})
