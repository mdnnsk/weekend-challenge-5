var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var petSchema = new Schema({
  pet_name: String,
  pet_type: String,
  pet_age: Number,
  image_url: String

});

var pets=mongoose.model('pets', petSchema);
module.exports=pets;
