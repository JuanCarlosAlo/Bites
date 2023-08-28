const express = require("express");
const mainRoutes = express.Router();
const controller = require("../controllers/main.controller");

mainRoutes.get("/all-mains", controller.getAllMains);
mainRoutes.get("/mainById/:id", controller.getMainId);
mainRoutes.post("/create-main", controller.createMain);


module.exports = mainRoutes;
