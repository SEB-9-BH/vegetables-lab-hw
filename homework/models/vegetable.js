const mongoose = require('mongoose')

const vegetableSchema = new mongoose.Schema({
    name: { type: String, required: true},
    color: { type: String, required: true },
    readyToEat: Boolean
})

const Vegetable = mongoose.model('vegetable', vegetableSchema)
module.exports = Vegetable