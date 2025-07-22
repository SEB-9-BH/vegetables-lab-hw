require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Vegetable = require('./models/vegetable')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override') //<====== import method-override
const PORT = process.env.PORT || 3000

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/vegetables', async (req, res) => {
    try {
            const vegetables =  await Vegetable.find({}) 
            res.render('vegetables/Index', {
                vegetables
            })
    } catch (error) {
            res.status(400).send({ message: error.message})
    }
})

app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New')
})

app.delete('/vegetables/:id', async (req, res) => {
    try{
        await Vegetable.findOneAndDelete({'_id': req.params.id })
            .then(() => {
                res.redirect('/vegetables')
            })
    }catch(error){
        res.status(400).send({ message: error.message })
    }
})

app.put('/vegetables/:id', async (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else if(req.body.readyToEat !== true) {
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

app.get('/vegetables/:id/edit', async (req, res) => {
    try {
        const foundVegetable = await Vegetable.findById(req.params.id)
        if(!foundVegetable){
            throw new error('No vegetable with that Id is in our database')
        } 
        res.render('vegetables/Edit', {
            vegetable: foundVegetable
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }

})

app.get('/vegetables/:id', async (req, res) => {

    const foundVegetable = await Vegetable.findById(req.params.id)
    if (!foundVegetable){
        res.send('Found no vegetable')
    } else {
        res.render('vegetables/Show', {
            vegetable: foundVegetable
        })
    } 
})

app.post('/vegetables', async (req, res) => {
    req.body.readyToEat === 'on' || req.body.readyToEat === true ? req.body.readyToEat = true : req.body.readyToEat = false
    try {
        const createdVegetable = await Vegetable.create(req.body)
        res.redirect(`/vegetables/${createdVegetable._id}`)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.listen(PORT, () => {
    console.log('app running on port 3000 you are so good at coding...')
})