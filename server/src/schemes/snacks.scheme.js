const mongoose = require("mongoose");

const SnacksSchema = mongoose.Schema(
    {
        _id: String,
        name: String,
        type: String,
        description: String,
        price: Number,
        rating: Number,
        img: String,
    },
    { collection: "snacks" }
);

const SnacksModel = mongoose.model("snacks", SnacksSchema);

module.exports = SnacksModel;

