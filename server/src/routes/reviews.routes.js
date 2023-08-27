const express = require("express");
const reviewsRoutes = express.Router();
const controller = require("../controllers/reviews.controller");


reviewsRoutes.post("/create-review", controller.createReview);


module.exports = reviewsRoutes;
