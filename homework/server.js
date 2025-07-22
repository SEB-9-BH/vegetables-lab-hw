// start the file and load environment variables ".env"
require('dotenv').config();

const express = require('express'); // express to build your server
const app = express(); // starts your web server 
const mongoose = require('mongoose') // to talk to MongoDB
const Vegetable = require('./models/Vegetable');
const jsxEngine = require('jsx-view-engine'); // to render JSX pages
const methodOverride = require('method-override');
const PORT = process.env.PORT || 4000

// set up the view engine to use JSX 
// this tells express: “When I render a page, use .jsx files and process them with jsx-view-engine.”
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())
app.use(express.static('public')) // tells to check the public file before the route 

// connect to MongoDB using Mongoose "the value from your .env file"
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

// this line baically tells express: "Hey, if someone submits a form to my server, 
// please take the data from that form and put it neatly into req.body so I can use it."
// Without this line, req.body would be undefined, and your server wouldn’t know what the user submitted.
// middleware to give us the body of the request data the user filled out
app.use(express.urlencoded({ extended: true })) // req.body
app.use(methodOverride('_method'));


// Basic test route so when you visit http://localhost:4000, you should see this message.
app.get('/', (req, res) => {
    res.render('vegetables/Home')
})

// ---------- INDEX: show all vegetables ----------
// async is used because the route will perform asynchronous operations (like querying the database)
app.get('/vegetables', async (req, res) => {
    try { // <===== begins a try block to catch errors during async operation
        // await queries the vegetable model (from MongoDB via Mongoose) to get all vegetables in the database.
        const vegetables = await Vegetable.find({}); // .find({}) means find all documents
        res.render('vegetables/Index', {
            vegetables
        }) // renders a view template called index and passes the list of vegetables so it can be displayed in the html
    } catch (error) {
        res.status(400).send({ message: error.message }) // If there’s an error (like database failure), it sends a 400 Bad Request response with the error message.
    }
});


// ---------- NEW: show a form to create a new item ----------
app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New') // Renders the 'New.jsx' file inside the 'views/vegetables' folder
})


// ---------- EDIT: show a form to edit the item ----------
// :id is a dynamic parameter — it will be replaced with the actual vegetable's MongoDB ID.
app.get('/vegetables/:id/edit', async (req, res) => {
    try {
        // Tries to find the vegetable in the database using the ID from the URL (req.params.id).
        // await waits for Mongoose to finish finding the vegetable.
        const foundVeg = await Vegetable.findById(req.params.id)
        if (!foundVeg) {
            throw new Error('No Vegetable with that Id is in our database')
        }
        // If the vegetable is found, render a page called Edit.jsx located inside the views/vegetables folder.
        res.render('vegetables/Edit', {
            // Pass the found vegetable object into the view so the form can be pre-filled with the existing data.
            vegetable: foundVeg
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})


// ---------- CREATE: add neew item to the database ----------
app.post('/vegetables', async (req, res) => {
    // ternary operator shortcut for if/else
    req.body.readyToEat === 'on' || req.body.readyToEat === true ? req.body.readyToEat = true : req.body.readyToEat = false
    try {
        const createdVeg = await Vegetable.create(req.body) // creates a new fruit in the database using the form data from req.body
        res.redirect(`/vegetables/${createdVeg._id}`); // After successfully creating the fruit, the user is redirected to a page that shows the new fruit, using its ID.
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})


// ---------- UPDATE: save changes to the item ----------
app.put('/vegetables/:id', async (req, res) => {
    // If the user checked the "Ready to Eat" checkbox in the form, it sends "on" as a string.
    if (req.body.readyToEat === 'on') {
        // Converts the string "on" into a Boolean true, so it stores correctly in MongoDB.
        req.body.readyToEat = true;
        // If the checkbox wasn’t checked, no value is sent — so this makes sure we treat it as false.
    } else if (req.body.readyToEat !== true) {
        req.body.readyToEat = false;
    }
    try {
        // Finds the vegetable in the database by its _id (from the URL), and updates it using the data from req.body.
        // { new: true } tells Mongoose to return the updated document, not the old one.
        await Vegetable.findOneAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            // After the update succeeds, this redirects the user to the Show page of the updated vegetable.
            .then(() => {
                res.redirect(`/vegetables/${req.params.id}`)
            })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})


// ---------- SHOW: show one specific item ----------
app.get('/vegetables/:id', async (req, res) => {
    try {
        // Tries to find the vegetable in the database using the ID from the URL (req.params.id).
        // await waits for Mongoose to finish finding the vegetable.
        const foundVeg = await Vegetable.findById(req.params.id)
        if (!foundVeg) {
            throw new Error('No Vegetable with that Id is in our database')
        }
        // If the vegetable is found, render a page called Edit.jsx located inside the views/vegetables folder.
        res.render('vegetables/Show', {
            // Pass the found vegetable object into the view so the form can be pre-filled with the existing data.
            vegetable: foundVeg
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})



// ---------- Delete: remove the item from the database ----------
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


// start the server and listen for users on port 4000
app.listen(PORT, () => {
    console.log('Server running at http://localhost:4000!')
})