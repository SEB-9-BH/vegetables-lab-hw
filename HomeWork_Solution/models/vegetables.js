const mongoose = require('mongoose')

const vegetableSchema = new mongoose.Schema({
    name:{type:String,required:true},
    color:{type:String,required:true},
    expired:Boolean
})

module.exports = mongoose.model('Vegetable',vegetableSchema)