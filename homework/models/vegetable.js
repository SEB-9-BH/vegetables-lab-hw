const mongoose = require('mongoose')


const vegetableSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    type: {type: String, 
        enum: [ 'root', 'leafy', 'fruit veg', 'flower', 'seed'],
        required: true
    }
})

const Vegetable = mongoose.model('Vegetable', vegetableSchema)
module.exports = Vegetable