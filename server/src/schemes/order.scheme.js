const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
    {
        _id: String,
        userId: String,
        orders: [
            {
                _id: String,
                date: Number,
                recipient: String,
                coordinates: Array,
                address: String,
                items: Array,
                completed: Boolean
            }
        ]
    },
    { collection: "orders" }
);

const OrderModel = mongoose.model("orders", OrderSchema);

module.exports = OrderModel;

