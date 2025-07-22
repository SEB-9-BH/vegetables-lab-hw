require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jsxEngine = require('jsx-view-engine');
const methodOverride = require('method-override')
const Vegetable = require('./models/vegetables'); 

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

// View engine config
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(express.static('public'));


// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Vegetables App!');
});

// Index
app.get('/vegetables', async (req, res) => {
  try {
    const vegetables = await Vegetable.find({});
    res.render('vegetables/Index', { vegetables });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// New
app.get('/vegetables/new', (req, res) => {
  res.render('vegetables/New');
});

// Create
app.post('/vegetables', async (req, res) => {
  try {
    req.body.readyToEat = req.body.readyToEat === 'on';
    await Vegetable.create(req.body); // 
    res.redirect('/vegetables');
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// Show
app.get('/vegetables/:id', async (req, res) => {
  try {
    const foundVegetable = await Vegetable.findById(req.params.id);
    if (!foundVegetable) {
      throw new Error('No Vegetable with that ID exists');
    }
    res.render('vegetables/Show', { vegetable: foundVegetable });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// DELETE
app.delete('/vegetables/:id', async (req, res) => {
  try {
    await Vegetable.findByIdAndDelete(req.params.id);
    res.redirect('/vegetables');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// UPDATE
app.put('/vegetables/:id', async (req, res) => {
  req.body.readyToEat = req.body.readyToEat === 'on';
  try {
    await Vegetable.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/vegetables/${req.params.id}`);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// EDIT
app.get('/vegetables/:id/edit', async (req, res) => {
  try {
    const vegetable = await Vegetable.findById(req.params.id);
    res.render('vegetables/Edit', { vegetable });
  } catch (error) {
    res.status(400).send(error.message);
  }
});


// Start server
app.listen(PORT, () => {
  console.log('App running on port 3000');
});
