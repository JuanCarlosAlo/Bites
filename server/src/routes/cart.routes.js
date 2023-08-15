const express = require("express");
const CartRoutes = express.Router();
const controller = require("../controllers/cart.controller");

CartRoutes.post("/all-cartItems", controller.getAllCartItems);


module.exports = CartRoutes;
