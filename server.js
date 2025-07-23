require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const jsxEngine = require("jsx-view-engine");

// App setup
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// View engine setup
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Mongoose model
const vegetableSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: String,
  readyToEat: Boolean
});
const Vegetable = mongoose.model("Vegetable", vegetableSchema);

// Home
app.get("/", (req, res) => {
  res.send(" Welcome to the Vegetable App!");
});

// Index - Show all vegetables
app.get("/Vegetables", async (req, res) => {
  const vegetables = await Vegetable.find();
  res.render("Vegetables/Index", { vegetables });
});

// New - Show form to create new veg
app.get("/Vegetables/New", (req, res) => {
  res.render("Vegetables/New");
});

// Create - Add new vegetable
app.post("/Vegetables", async (req, res) => {
  req.body.readyToEat = req.body.readyToEat === "on";
  await Vegetable.create(req.body);
  res.redirect("/Vegetables");
});

// Show - Single vegetable
app.get("/Vegetables/:id", async (req, res) => {
  const vegetable = await Vegetable.findById(req.params.id);
  res.render("Vegetables/Show", { vegetable });
});

// Edit - Show edit form
app.get("/Vegetables/:id/edit", async (req, res) => {
  const vegetable = await Vegetable.findById(req.params.id);
  res.render("Vegetables/Edit", { vegetable });
});

// Update - Save edited vegetable
app.put("/Vegetables/:id", async (req, res) => {
  req.body.readyToEat = req.body.readyToEat === "on";
  await Vegetable.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/Vegetables/${req.params.id}`);
});

// Delete - Remove vegetable
app.delete("/Vegetables/:id", async (req, res) => {
  await Vegetable.findByIdAndDelete(req.params.id);
  res.redirect("/Vegetables");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});