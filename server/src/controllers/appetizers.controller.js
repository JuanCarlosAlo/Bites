const { v4 } = require("uuid");
const UserModel = require("../schemes/users.scheme");
const AppetizersModel = require("../schemes/appetizer.scheme");


const controller = {};

controller.getAllAppetizers = async (req, res) => {
  const allAppetizers = await AppetizersModel.find();

  try {
    res.status(200).send(allAppetizers);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.getAppetizerId = async (req, res) => {
  const autentifiedAppetizer = await AppetizersModel.findById(req.params.id);

  try {
    res.status(200).send(autentifiedAppetizer);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.createAppetizer = async (req, res) => {
  try {
    const { name, type, description, price, img } = req.body;

    const newAppetizer = new AppetizersModel({
      _id: v4(),
      name,
      type,
      description,
      price,
      img,
    });

    await newAppetizer.save();

    return res.status(201).send({ message: "Appetizer created successfully" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).send({ error: "Appetizer already exists" });
    }
    return res.status(500).send({ error: "Error creating appetizer" });
  }
};

controller.deleteAppetizer = async (req, res) => {

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
