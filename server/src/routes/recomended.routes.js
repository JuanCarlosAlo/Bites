const express = require("express");
const RecomendedRoutes = express.Router();
const controller = require("../controllers/recomended.controller");

RecomendedRoutes.get("/all-recomendedItems", controller.getAllRecomendedItems);


module.exports = RecomendedRoutes;
