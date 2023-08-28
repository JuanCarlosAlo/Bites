const express = require("express");
const appetizersRoutes = express.Router();
const controller = require("../controllers/appetizers.controller");

appetizersRoutes.get("/all-appetizers", controller.getAllAppetizers);
appetizersRoutes.get("/appetizerById/:id", controller.getAppetizerId);
appetizersRoutes.post("/create-appetizer", controller.createAppetizer);


module.exports = appetizersRoutes;
