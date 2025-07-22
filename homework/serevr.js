require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const Vegtebale = require('./models/vegetable')
const Vegetable = require('./models/vegetable')
const PORT = process.env.PORT || 3000

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongo :)')
})

//Middleware section to access the data taken frm use(user filled it out)
app.use(express.urlencoded({ extended: true})) // for req.body
app.use(methodOverride('_method')) //adding a method to ovveride an action like overide POST with PUT 
app.use(express.static('public'))


//Index
app.get('/vegetables', async (req, res) => {
    try {
        const vegetables = await Vegetable.find({})
        res.render('vegetables/Index',  {
            vegetables
        })
    } catch(error) {
        res.status(400).send({message: error.message})
    }
})



//New
app.get('/vegetables/new', async (req, res) => {
    try{
        res.render('vegetables/New')
    }
    catch(error) {
        res.status(400).send({message: error.massage})
    }
})



//Destroy
app.delete('/vegetables/:id', async (req, res) => {
    try {
        await Vegetable.findOneAndDelete({'_id' : req.params.id})
        res.redirect('/vegetables')
    } catch (error) {
        res.status(400).send({ message: error.message})
    }
})







//Update
app.put('/vegetables/:id', async (req, res) => {
    try {
        await Vegetable.findOneAndUpdate({'_id': req.params.id})
        .then(() =>{
            res.redirect(`/vegetables/${req.params.id}`)
        })
    }
    catch(error) {
        res.status(400).send({ message : error.message})
    }
})









//Edit
app.get('/vegetables/:id/edit', async (req, res) => {
    try {
        const foundVegetable = await Vegetable.findById(req.params.id)
        if (!foundVegetable) {
            throw new error ('There is no Vegetable with that Id in our database')
        } else {
            res.render('vegetables/Edit' , {
                Vegetable: foundVegetable
            })
        }

    }
    catch(error) {
        res.status(400).send({ message: error.message})
    }
})








//Show
app.get('/vegetables/:id', async (req, res) => {
    try {
        const foundVegetable = await Vegetable.findById(req.params.id)
        if (!foundVegetable) {
            throw new error ('There is no vegetable with that Id in our database')
        } else {
            res.render('vegetables/Show' ,{
                Vegetable: foundVegetable
            })
        }
    }
    catch(error) {
        res.status(400).send({ message: error.message})
    }
})






//Create 
app.post('/vegetables', async (req, res) => {
    try {
        const createdVegetable = await Vegetable.create(req.body)
        res.redirect(`vegetables/${createdVegetable._id}`)
    }
    catch(error) {
        res.status(400).send({ message: error.message})
    }
})







app.listen(PORT, ()=> {
    console.log('app running on port 3000, great work developer..')
} )