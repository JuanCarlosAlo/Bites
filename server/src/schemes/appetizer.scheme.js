const mongoose = require("mongoose");

const AppetizerSchema = mongoose.Schema(
    {
        _id: String,
        name: String,
        type: String,
        description: String,
        price: Number,
        rating: Number,
        img: String,
    },
    { collection: "appetizers" }
);

const AppetizersModel = mongoose.model("appetizers", AppetizerSchema);

module.exports = AppetizersModel;

