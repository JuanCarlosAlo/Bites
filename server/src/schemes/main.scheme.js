const mongoose = require("mongoose");

const MainSchema = mongoose.Schema(
    {
        _id: String,
        name: String,
        type: String,
        description: String,
        price: Number,
        rating: Number,
        img: String,
    },
    { collection: "main" }
);

const MainModel = mongoose.model("main", MainSchema);

module.exports = MainModel;

