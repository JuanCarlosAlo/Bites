const { v4 } = require("uuid");
const UserModel = require("../schemes/users.scheme");
const SnacksModel = require("../schemes/snacks.scheme");


const controller = {};

controller.getAllSnacks = async (req, res) => {
  const allAppetizers = await SnacksModel.find();

  try {
    res.status(200).send(allAppetizers);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.getSnackId = async (req, res) => {
  const autentifiedSnack = await SnacksModel.findById(req.params.id);

  try {
    res.status(200).send(autentifiedSnack);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.createSnack = async (req, res) => {
  try {
    const { name, type, description, price, img } = req.body;

    const newSnack = new SnacksModel({
      _id: v4(),
      name,
      type,
      description,
      price,
      img,
    });

    await newSnack.save();
    console.log(newSnack);
    return res.status(201).send({ message: "Snack created successfully" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).send({ error: "Snack already exists" });
    }
    return res.status(500).send({ error: "Error creating Snack" });
  }
};

controller.deleteSnack = async (req, res) => {
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
