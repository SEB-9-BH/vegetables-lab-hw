// creates a mongoose model for a "vegetable", which will be saved 
// in a MongoDB database

// You’re basically saying: “Here’s the shape and structure of the vegetable data I want to store in the database.”


const mongoose = require('mongoose')

// defining a schema (a blueprint) for the vegetable data
// This tells MongoDB: "Every vegetable should have a name, a color, and a readyToEat value."
const vegetableSchema = new mongoose.Schema ({
    name: { type: String, required: true}, 
    color: { type: String, required: true}, 
    readyToEat: Boolean
})

// creating a model called "vegetable" and exporting it so you can use it in other files.

module.exports = mongoose.model('Vegetable', vegetableSchema)