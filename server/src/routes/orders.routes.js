const express = require("express");
const ordersRoutes = express.Router();
const controller = require("../controllers/orders.controller");

ordersRoutes.get("/all-orders/:id", controller.getAllOrders);
ordersRoutes.get("/orderById/:id", controller.getOrderId);
ordersRoutes.post("/create-order", controller.createOrder);
ordersRoutes.post("/complete-order/:id", controller.completeOrder);


module.exports = ordersRoutes;
