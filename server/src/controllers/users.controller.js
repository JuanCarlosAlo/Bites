const { v4 } = require("uuid");
const UserModel = require("../schemes/users.scheme");

const controller = {};

controller.getAllUsers = async (req, res) => {
  const allUsers = await UserModel.find();
  console.log(allUsers);
  try {
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.getUserId = async (req, res) => {
  const autentifiedUser = await UserModel.findById(req.params.id);

  try {
    res.status(200).send(autentifiedUser);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.createUser = async (req, res) => {
  try {
    const { userName, email, address, orders, type, _id } = req.body;
    const newDate = Date.now();

    const newUser = await new UserModel({
      _id,
      userName,
      email,
      address,
      orders,
      accountCreated: newDate,
      type,
    });

    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.status(409).send({ error: "User already exists" });
    }

    await newUser.save();

    return res.status(200).send({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).send({ error: "Error creating user" });
  }
};

controller.editUser = async (req, res) => {
  try {
    const currentUser = await UserModel.findById(req.params.id);
    await UserModel.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );

    await currentUser.save();
    return res.status(200).send({ message: "User updated successfully" });
  } catch {
    return res.status(500).send({ error: "Error" });
  }
};

controller.deleteUser = async (req, res) => {
  console.log(req.params.id);
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
    res.status(200).json({ message: "Usuar elimanated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting user" });
  }
};

module.exports = controller;
