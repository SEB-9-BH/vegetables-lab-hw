require("dotenv").config();
const express = require("express");
const jsxViewEngine = require("jsx-view-engine");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Vegetable = require("./model/vegetable");
const app = express();
const PORT = process.env.PORT || 3001;

app.set("view engine", "jsx");
app.engine("jsx", jsxViewEngine());

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

// INDEX
app.get("/vegetable", async (req, res) => {
  const veg = await Vegetable.find({});
  res.render("Index", { vegetables: veg });
});

// NEW
app.get("/vegetable/new", (req, res) => {
  res.render("New");
});

// CREATE
app.post("/vegetable", async (req, res) => {
  const veg = await Vegetable.create(req.body);
  res.redirect(`/vegetable/${veg._id}`);
});

// SHOW
app.get("/vegetable/:id", async (req, res) => {
  const veg = await Vegetable.findById(req.params.id);
  res.render("Show", { vegetable: veg });
});

// EDIT FORM
app.get("/vegetable/:id/edit", async (req, res) => {
  const veg = await Vegetable.findById(req.params.id);
  res.render("Edit", { vegetable: veg });
});

// UPDATE
app.put("/vegetable/:id", async (req, res) => {
  await Vegetable.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/vegetable/${req.params.id}`);
});

// DELETE
app.delete("/vegetable/:id", async (req, res) => {
  await Vegetable.findByIdAndDelete(req.params.id);
  res.redirect("/vegetable");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
