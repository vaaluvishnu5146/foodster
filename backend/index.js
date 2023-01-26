const express = require("express");
const app = express();
const ProductController = require("./controller/Products.controller");

// REGISTERING CONTROLLER
app.use("/products", ProductController);

module.exports = app;
