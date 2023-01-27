const express = require("express");
const app = express();
const ProductController = require("./controller/Products.controller");
const UserController = require("./controller/User.controller");
const SignInController = require("./controller/Signin.controller");

// REGISTERING CONTROLLER
app.use("/products", ProductController);
app.use("/users", UserController);
app.use("/signin", SignInController);

module.exports = app;
