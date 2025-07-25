const mongoose  = require("mongoose");

const vegtableSchema = new mongoose.Schema({
    name: {type:String, required:true},
    quantity:{type:Number, required:true},
    color: {type:String, required:true},
})

module.exports=mongoose.model('Vegetable', vegtableSchema);
