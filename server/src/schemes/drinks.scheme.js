const mongoose = require("mongoose");

const DrinksSchema = mongoose.Schema(
    {
        _id: String,
        name: String,
        type: String,
        description: String,
        price: Number,
        rating: Number,
        img: String,
    },
    { collection: "drinks" }
);

const DrinksModel = mongoose.model("drinks", DrinksSchema);

module.exports = DrinksModel;

