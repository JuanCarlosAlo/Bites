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

    return res.status(201).send({ message: "Snack created successfully" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).send({ error: "Snack already exists" });
    }
    return res.status(500).send({ error: "Error creating Snack" });
  }
};



module.exports = controller;
