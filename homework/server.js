require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const vegetable = require('./models/vegetable')
const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})
app.use(express.urlencoded({ extended: true }))


app.get('/', (req,res) => {
    res.send('Hi')
})
app.get('/vegetables', async (req,res) => {
    const vegetables = await vegetable.find({})
    res.render('vegetables/Index', {
        vegetables
    })
})
app.get('/vegetables/new', (req,res) => {
    res.render('vegetables/New')
})
app.get('/vegetables/:id', async (req,res) => {
    const foundVegetable = await vegetable.findById(req.params.id)
    if(!foundVegetable) {
        res.send('Found no vegetable')
    } else {
        res.render('vegetables/Show', {
            vegetable : foundVegetable
        })
    }
})

app.post('/vegetables', async (req, res) => {
    req.body.readyToEat === 'on' || req.body.readyToEat === true ? req.body.readyToEat = true : req.body.readyToEat = false
   const createdVegetable = await vegetable.create(req.body)
   res.redirect(`/vegetables/${createdVegetable._id}`)
})

app.listen(3000, () => {
    console.log('vegetables is running')
})