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



module.exports = controller;
