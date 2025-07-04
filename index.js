// Import
const express = require("express");
require('./connection');
const proModel = require('./Model/Product');
const stModel = require("./Model/User");
const cors = require('cors');

// Initialize
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Root API
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Add Product API
app.post("/add", async (req, res) => {
  try {
    await proModel(req.body).save();
    res.send({ message: "Product added!" });
  } catch (error) {
    console.error("Add Product Error:", error);
    res.status(500).send({ message: "Failed to add product" });
  }
});

// Signup API (User Registration)
app.post("/signup", async (req, res) => {
  try {
    await stModel(req.body).save();
    res.send({ message: "Signed up successfully!" });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).send({ message: "Signup failed" });
  }
});

// Login API
app.post("/log", async (req, res) => {
  try {
    var user = await stModel.findOne({ email: req.body.email });

    if(!user) {
      return res.send({ message: "User not found" });
    }

    if(user.password === req.body.password){
      return res.send({
        message: "Logged in successfully",
        userType: user.userType,
        name: user.name,
        email: user.email,
        userId: user._id
      });
    } else {
      return res.send({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).send({ message: "An error occurred!" });
  }
});

// View Products API
app.get("/view", async (req, res) => {
  try {
    const data = await proModel.find();
    res.send(data);
  } catch (error) {
    console.error("View Products Error:", error);
    res.status(500).send({ message: "Failed to fetch products" });
  }
});

// View Users API
app.get("/vu", async (req, res) => {
  try {
    const data = await stModel.find();
    res.send(data);
  } catch (error) {
    console.error("View Users Error:", error);
    res.status(500).send({ message: "Failed to fetch users" });
  }
});

// Delete Product API
app.delete("/del/:id", async (req, res) => {
  try {
    await proModel.findByIdAndDelete(req.params.id);
    res.send({ message: "Product deleted!" });
  } catch (error) {
    console.error("Delete Product Error:", error);
    res.status(500).send({ message: "Failed to delete product" });
  }
});

// Update Product API
app.put("/up/:id", async (req, res) => {
  try {
    await proModel.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: "Product updated!" });
  } catch (error) {
    console.error("Update Product Error:", error);
    res.status(500).send({ message: "Failed to update product" });
  }
});

// Server Listen
app.listen(3000, () => {
  console.log("Port is running");
});
