var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongoURI = "mongodb://localhost:27017/pets";
var MongoDB = mongoose.connect(mongoURI).connection;
var pet = require ('../models/pets');

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});

var server = app.listen(8080, 'localhost', function (req, res) {
  var port = server.address().port;
  console.log('listening on' + port);
});

app.use(express.static('public'));

app.use(bodyParser.json());

app.get('/', function(req,res){
  console.log('at base url');
  res.sendFile(path.resolve('views/index.html'));
});

app.get('/pets', function(req,res){
  console.log('hit the get route');
    pet.find().then( function( data ){
      console.log(data);
      res.send( data );
    });
  });

app.post('/pets', function(req,res){
  console.log('hit pets post');
  console.log(req.body);
  var sendPet = new pet ({
    pet_name: req.body.pet_name,
    pet_type: req.body.pet_type,
    pet_age: req.body.pet_age,
    image_url: req.body.image_url
  });
  sendPet.save(function(err){
    if (err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('pet saved succesfully');
      res.sendStatus(200);
    }
  });




});
