const express = require("express");
const drinksRoutes = express.Router();
const controller = require("../controllers/drinks.controller");

drinksRoutes.get("/all-drinks", controller.getAllDrinks);
drinksRoutes.get("/drinksById/:id", controller.getDrinkId);
drinksRoutes.post("/create-drink", controller.createDrink);


module.exports = drinksRoutes;
