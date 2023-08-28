const { v4 } = require("uuid");
const UserModel = require("../schemes/users.scheme");
const OrderModel = require("../schemes/order.scheme");

const { default: mongoose } = require("mongoose");

const controller = {};

controller.getAllOrders = async (req, res) => {

  const allOrders = await OrderModel.findOne({ userId: req.params.id });

  try {
    res.status(200).send(allOrders);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.getOrderId = async (req, res) => {
  const allOrders = await OrderModel.findOne({ userId: req.params.id });
  const orderById = allOrders.orders.find(order => order._id === req.body.id)
  try {
    res.status(200).send(orderById);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};
controller.completeOrder = async (req, res) => {
  const allOrders = await OrderModel.findOne({ userId: req.params.id });
  const orderById = allOrders.orders.find(order => order._id === req.body.id)

  orderById.completed = true
  await allOrders.save()
  try {
    res.status(200).send({ message: 'Order finished' });
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.createOrder = async (req, res) => {

  try {
    const { recipient, coordinates, address, items, completed, userId, _id, deliveryTime, remainingTime } = req.body;
    const currentUser = await UserModel.findById(userId);
    let orderCollection = await OrderModel.findOne({ userId: userId });

    if (!orderCollection) {

      orderCollection = await OrderModel.create({
        _id: new mongoose.Types.ObjectId(),
        userId,
        orders: [],
      });

    }

    const newOrder = {
      _id,
      date: new Date(),
      recipient,
      coordinates,
      address,
      items,
      deliveryTime,
      remainingTime,
      completed
    };

    orderCollection.orders.unshift(newOrder);

    await orderCollection.save();

    const existingOrderRef = currentUser.orders.find(
      (noteRef) => noteRef.toString() === orderCollection._id.toString()
    );
    if (!existingOrderRef) {
      currentUser.orders.unshift(orderCollection._id);
      await currentUser.save();
    }
    return res.status(200).send({ message: "Order created successfully" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).send({ error: "order already exists" });
    }
    return res.status(500).send({ error: "Error creating order" });
  }
};



module.exports = controller;
