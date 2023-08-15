const express = require("express");
const usersRoutes = express.Router();
const controller = require("../controllers/users.controller");

usersRoutes.get("/all-users", controller.getAllUsers);
usersRoutes.get("/userById/:id", controller.getUserId);
usersRoutes.post("/create-user", controller.createUser);
usersRoutes.delete("/delete-user/:id", controller.deleteUser);

module.exports = usersRoutes;
