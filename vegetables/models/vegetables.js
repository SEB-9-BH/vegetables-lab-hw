const mongoose = require('mongoose');

const vegetableSchema = new mongoose.Schema({
  name: String,
  color: String,
  readyToEat: Boolean
});

const Vegetable = mongoose.model('Vegetable', vegetableSchema);
module.exports = Vegetable;
