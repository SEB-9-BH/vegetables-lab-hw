require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Vegetable = require('./models/vegetables')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const PORT = process.env.PORT || 3000
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})
// Middleware for the body
app.use(express.urlencoded({extended: true}))
//Method Override
app.use(methodOverride('_method'))
app.get('/', (req, res) => {
    res.send('hello world')
})
//Index Route
app.get('/vegetables',async (req, res) => {
    try {
        const vegetables = await Vegetable.find({})
        res.render('vegetables/Index', {
        vegetables
         })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})
//New Route
app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/new')
})
//Delete Route
app.delete('/vegetables/:id', async (req, res) => {
    try {
        await Vegetable.findOneAndDelete({'_id': req.params.id})
            .then(() => {
                res.redirect('/vegetables')
            })
    } catch(error){
        res.status(400).send({ message: error.message })
    }
})
//Update Route
app.put('/vegetables/:id', async (req, res) => {
    if (req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else if (req.body.readyToEat !== true) {
        req.body.readyToEat = false;
    }
    try {
        await Vegetable.findOneAndUpdate({'_id': req.params.id}, req.body, { new: true })
            .then(()=>{
                res.redirect(`/vegetables/${req.params.id}`)
            })
    } catch(error){
        res.status(400).send({ message: error.message })
    }
})
//Edit Route
app.get('/vegetables/:id/edit', async (req, res) => {
    try {
        const foundVegetable = await Vegetable.findById(req.params.id)
        if (!foundVegetable) {
            throw new error('No vegetable with that Id is in our database')
        }
        res.render('vegetables/edit', {
            vegetable: foundVegetable
        })
    } catch (error){
        res.status(400).send({message: error.message})
    }
})
//Show Route
app.get('/vegetables/:id', async (req, res) => {
    try {
        const foundVegetable = await Vegetable.findById(req.params.id)
        if (!foundVegetable) {
            throw new error('No vegetable with that Id is in our database')
        }
        res.render('vegetables/Show', {
            vegetable: foundVegetable
        })
    } catch(error){
        res.status(400).send({message: error.message})
    }
})
//Create Route
app.post('/vegetables', async (req, res) => {
    req.body.readyToEat === 'on' || req.body.readyToEat === true ? req.body.readyToEat = true : req.body.readyToEat = false
    try {
        const createdVegetable = await Vegetable.create(req.body)
        res.redirect(`/vegetables/${createdVegetable._id}`)
    } catch(error){
        res.status(400).send({message: error.message})
    }
})
//Listen 
app.listen(PORT, () => {
    console.log('Running!')
})
