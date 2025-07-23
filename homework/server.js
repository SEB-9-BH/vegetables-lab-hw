require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jsxEngine = require("jsx-view-engine");
const methodOverride = require("method-override");
const Vegetable = require("./models/Vegetables");
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once("open", () => {
    console.log("Connected to mongoDB");
});

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// ROOT
app.get("/", (req, res) => {
    res.send("Hello World! (vegetables edition)");
});

// INDEX
app.get("/vegetables", async (req, res) => {
    try {
        const vegetables = await Vegetable.find({});
        res.render("vegetables/Index", {
        vegetables: vegetables
        });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
});

// NEW
app.get("/vegetables/new", (req, res) => {
    res.render("vegetables/New");
});

// DESTROY
app.delete("/vegetables/:id", async (req, res) => {
    try {
        await Vegetable.findOneAndDelete({ "_id": req.params.id })
        .then(() => {
            res.redirect("/vegetables")
        });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
});

// UPDATE
app.put('/vegetables/:id', async (req, res) => {
    if(req.body.readyToEat === "on") {
        req.body.readyToEat = true;
    } 
    else if (req.body.readyToEat !== true) {
        req.body.readyToEat = false;
    }
    try {
        await Vegetable.findOneAndUpdate({ "_id": req.params.id}, req.body, { new: true })
            .then(() => { 
                res.redirect(`/vegetables/${req.params.id}`)
            });
    } 
    catch (error) {
        res.status(400).send({ message: error.message })
    }
});

// EDIT
app.get("/vegetables/:id/edit", async (req, res) => {
   try {
        const foundVegetable = await Vegetable.findById(req.params.id);
        if (!foundVegetable) {
            throw new error("No vegetable with matching id exists in our database");
        }
        res.render("vegetables/Edit", {
            vegetable: foundVegetable
        });
    }
    catch (error) {
        res.status(400).send({ message: error.message })
    }
});

// SHOW
app.get("/vegetables/:id", async (req, res) => {
    try {
        const foundVegetable = await Vegetable.findById(req.params.id);
        if (!foundVegetable) {
            throw new error("No vegetables for you today!")
        }
        res.render("vegetables/Show", {
            vegetable: foundVegetable
        });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
});


// CREATE
app.post("/vegetables", async (req, res) => {
    req.body.readyToEat === "on" || req.body.readyToEat === true ? 
    req.body.readyToEat = true : req.body.readyToEat = false;
    try {
        const createdVegetable = await Vegetable.create(req.body);
        res.redirect(`/vegetables/${createdVegetable._id}`);
    }
    catch (error) {
        res.status(400).send({message: error.message})
    }
})

// SERVER
app.listen(PORT, () => {
    console.log("Server Initialized on Port 3000...");
})
