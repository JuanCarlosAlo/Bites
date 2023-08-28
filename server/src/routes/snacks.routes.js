const express = require("express");
const snacksRoutes = express.Router();
const controller = require("../controllers/snacks.controller");

snacksRoutes.get("/all-snacks", controller.getAllSnacks);
snacksRoutes.get("/snackById/:id", controller.getSnackId);
snacksRoutes.post("/create-snack", controller.createSnack);


module.exports = snacksRoutes;
