const { v4 } = require("uuid");
const UserModel = require("../schemes/users.scheme");
const OrderModel = require("../schemes/order.scheme");

const { default: mongoose } = require("mongoose");

const controller = {};

controller.getAllOrders = async (req, res) => {
  console.log(req.params)
  const allOrders = await OrderModel.findOne({ userId: req.params.id });
  console.log(allOrders)
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
    const { recipient, coordinates, address, items, completed, userId } = req.body;
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
      _id: v4(),
      date: new Date(),
      recipient,
      coordinates,
      address,
      items,
      completed
    };

    orderCollection.orders.unshift(newOrder);
    console.log(orderCollection)
    await orderCollection.save();

    const existingOrderRef = currentUser.orders.find(
      (noteRef) => noteRef.toString() === orderCollection._id.toString()
    );
    if (!existingOrderRef) {
      currentUser.orders.unshift(orderCollection._id);
      await currentUser.save();
    }
    return res.status(201).send({ message: "Order created successfully" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).send({ error: "order already exists" });
    }
    return res.status(500).send({ error: "Error creating order" });
  }
};

controller.deleteOrder = async (req, res) => {
  console.log(req.params.id)
  try {
    const userId = req.params.id;
    const currentUser = await UserModel.findById(userId);

    const journalEntriesCount = await JournalsModel.countDocuments({ userId });
    if (journalEntriesCount > 0) {
      // Eliminar journalEntries del usuario
      await JournalsModel.deleteMany({ userId });
    }

    // Comprobar si existen documentos en notes del usuario
    const notesCount = await NotesModel.countDocuments({ userId });
    if (notesCount > 0) {
      // Eliminar notes del usuario
      await NotesModel.deleteMany({ userId });
    }

    // Comprobar si existen documentos en tasks del usuario
    const tasksCount = await TasksModel.countDocuments({ userId });
    if (tasksCount > 0) {
      // Eliminar tasks del usuario
      await TasksModel.deleteMany({ userId });
    }

    // Comprobar si existen documentos en chats del usuario
    const chatsCount = await ChatsModel.countDocuments({ userId });
    if (chatsCount > 0) {
      // Eliminar chats del usuario
      await ChatsModel.deleteMany({ userId });
    }

    await UserModel.findByIdAndRemove(currentUser._id);
    await currentUser.markModified("._id");
    res
      .status(200)
      .json({ message: "Usuar elimanated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting user" });
  }
};

module.exports = controller;
