const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let houseSchema = new Schema({
  title: String,
  price: String,
  description: String,
  name: String,
  phone: String,
  img: String,
  lat: Number,
  lang: Number
});

let House = mongoose.model('House', houseSchema);

module.exports = House;
