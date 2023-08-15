const express = require("express");
const drinksRoutes = express.Router();
const controller = require("../controllers/drinks.controller");

drinksRoutes.get("/all-drinks", controller.getAllDrinks);
drinksRoutes.get("/drinksById/:id", controller.getDrinkId);
drinksRoutes.post("/create-drink", controller.createDrink);
drinksRoutes.delete("/delete-drink/:id", controller.deleteDrink);

module.exports = drinksRoutes;
