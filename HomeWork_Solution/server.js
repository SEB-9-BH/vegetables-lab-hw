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
    try {
        const vegetables =  await Vegetable.find({}) 
        res.render('vegetables/Index', {vegetables})
    } 
    catch (error) {
            res.status(400).send({ message: error.message})
    }
})


//New
app.get('/vegetables/new', async (req,res)=>{
    res.render('vegetables/New')
})


//Delete
app.delete('/vegetables/:id', async (req,res)=>{
    try{
        await Vegetable.findByIdAndDelete({'_id': req.params.id})
        .then(()=>{
            res.redirect('/vegetables')
        })
    }
    catch(error){
        res.status(400).send({message: error.message})
    }     
})


//Update
app.put('/vegetables/:id', async (req,res)=>{
    if(req.body.expired === 'on'){
        req.body.expired = true
    }
    else{
        req.body.expired = false
    }
    try{
        await Vegetable.findByIdAndUpdate({'_id': req.params.id}, req.body,{new:true})
        .then(()=>{
            res.redirect(`/vegetables/${req.params.id}`)
        })
    }
    catch(error){
        res.status(400).send({message: error.message})
    }
})


//Create
app.post('/vegetables', async (req,res)=>{
    if(req.body.expired === 'on'){
        req.body.expired = true
    }
    else{
        req.body.expired = false
    }
    try{
        const createdVegetable = await Vegetable.create(req.body)
        res.redirect(`/vegetables/${createdVegetable._id}`)
    }
    catch(error){
        res.status(400).send({message: error.message})
    }

})


//Edit
app.get('/vegetables/:id/edit', async (req,res)=>{
    try{
        const foundVegetable = await Vegetable.findOne({_id: req.params.id})
        res.render('vegetables/Edit',{Vegetable: foundVegetable})
    }
    catch (error) {
        res.status(400).send({ message: error.message })
    }
})


//Show
app.get('/vegetables/:id', async (req,res)=>{
    try{
        const foundVegetable = await Vegetable.findOne({_id: req.params.id})
        res.render('vegetables/Show',{Vegetable: foundVegetable})
    }
    catch(error){
        res.status(400).send({message: error.message})
    }
})




//Our Port
app.listen(PORT ,()=>{
    console.log(`Port ${PORT} is now active`)
})