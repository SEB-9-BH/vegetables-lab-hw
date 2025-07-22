require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Vegatable = require('./models/vegatable')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override') //<====== import method-override
const PORT = process.env.PORT || 3000

// app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})


// middleware to give us the body of the request data the user filled out
app.use(express.urlencoded({ extended: true })) // req.body
app.use(methodOverride('_method')) // <====== add method override
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World')
})

// Index
app.get('/vegatables', async (req, res) => {
    // now we need to use the view engine
    // Fruit.find
    try {
            const vegatables =  await Vegatable.find({}) // reachout database for the fruits
            res.render('vegatables/Index', {
                vegatables
            })
    } catch (error) {
            res.status(400).send({ message: error.message})
    }
})
//New
app.get('/vegatables/new', (req, res) => {
    res.render('vegatables/New')
})

// Destroy

app.delete('/vegatables/:id', async (req, res) => {
    try{
        await Vegatable.findOneAndDelete({'_id': req.params.id })
            .then(() => {
                res.redirect('/vegatables')
            })
    }catch(error){
        res.status(400).send({ message: error.message })
    }
})
// Update
app.put('/vegatables/:id', async (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else if(req.body.readyToEat !== true) {
        req.body.readyToEat = false;
    }
    try {
        await Vegatable.findOneAndUpdate({'_id': req.params.id}, req.body, { new: true })
            .then(()=>{
                res.redirect(`/vegatables/${req.params.id}`)
            })
    } catch(error){
        res.status(400).send({ message: error.message })
    }
})
// Edit
app.get('/vegatables/:id/edit', async (req, res) => {
    try {
        const foundVegatable = await Vegatable.findById(req.params.id)
        if(!foundVegatable){
            throw new error('No Vegatable with that Id is in our database')
        } 
        res.render('vegatables/Edit', {
            vegatable: foundVegatable
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }

})


// Show

app.get('/vegatables/:id', async (req, res) => {
    try {
        const foundVegatable = await Vegatable.findById(req.params.id)
        if(!foundVegatable){
            throw new error('No Vegatable with that Id is in our database')
        } 
        res.render('vegatables/Show', {
            vegatable: foundVegatable
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }

})

// Create
app.post('/vegatables', async (req, res) => {
    req.body.readyToEat === 'on' || req.body.readyToEat === true ? req.body.readyToEat = true : req.body.readyToEat = false
    try {
        const createdVegatable = await Vegatable.create(req.body)
        res.redirect(`/vegatables/${createdVegatable._id}`)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.listen(PORT, () => {
    console.log('app running on port 3000 you are so good at coding...')
})