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
  console.log("✅ Connected to MongoDB");
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

// ========== ROUTES ==========

// Home
app.get("/", (req, res) => {
  res.send(" Welcome to the Vegetable App!");
});

// Index - Show all vegetables
app.get("/vegetables", async (req, res) => {
  const vegetables = await Vegetable.find();
  res.render("vegetables/Index", { vegetables });
});

// New - Show form to create new veg
app.get("/vegetables/new", (req, res) => {
  res.render("vegetables/New");
});

// Create - Add new vegetable
app.post("/vegetables", async (req, res) => {
  req.body.readyToEat = req.body.readyToEat === "on";
  await Vegetable.create(req.body);
  res.redirect("/vegetables");
});

// Show - Single vegetable
app.get("/vegetables/:id", async (req, res) => {
  const vegetable = await Vegetable.findById(req.params.id);
  res.render("vegetables/Show", { vegetable });
});

// Edit - Show edit form
app.get("/vegetables/:id/edit", async (req, res) => {
  const vegetable = await Vegetable.findById(req.params.id);
  res.render("vegetables/Edit", { vegetable });
});

// Update - Save edited vegetable
app.put("/vegetables/:id", async (req, res) => {
  req.body.readyToEat = req.body.readyToEat === "on";
  await Vegetable.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/vegetables/${req.params.id}`);
});

// Delete - Remove vegetable
app.delete("/vegetables/:id", async (req, res) => {
  await Vegetable.findByIdAndDelete(req.params.id);
  res.redirect("/vegetables");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
