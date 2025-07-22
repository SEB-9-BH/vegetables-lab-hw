require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const Vegetable = require('./models/vegetables')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(morgan('dev'))
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())
app.use(express.static('public'))

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongodb')
})

//Routes

//Index
app.get('/vegetables', async (req,res)=>{

})


//New
app.get('/vegetables/new', async (req,res)=>{

})


//Delete
app.delete('/vegetables/:id', async (req,res)=>{

})


//Update
app.put('/vegetables/:id', async (req,res)=>{

})


//Create
app.post('/vegetables', async (req,res)=>{

})


//Edit
app.get('/vegetables/:id/edit', async (req,res)=>{

})


//Show
app.get('/vegetables/:id', async (req,res)=>{

})




//Our Port
app.listen(PORT ,()=>{
    console.log(`Port ${PORT} is now active`)
})