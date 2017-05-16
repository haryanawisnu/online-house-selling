const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let houseSchema = new Schema({
  title: String,
  price: String,
  description: String,
  author: String,
  phone: String,
  location: String
});

let House = mongoose.model('House', houseSchema);

module.exports = House;
