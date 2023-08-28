const { v4 } = require("uuid");
const UserModel = require("../schemes/users.scheme");
const MainModel = require("../schemes/main.scheme");


const controller = {};

controller.getAllMains = async (req, res) => {
  const allAppetizers = await MainModel.find();

  try {
    res.status(200).send(allAppetizers);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.getMainId = async (req, res) => {
  const autentifiedAppetizer = await MainModel.findById(req.params.id);

  try {
    res.status(200).send(autentifiedAppetizer);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.createMain = async (req, res) => {
  try {
    const { name, type, description, price, img } = req.body;

    const newMain = new MainModel({
      _id: v4(),
      name,
      type,
      description,
      price,
      img,
    });

    await newMain.save();

    return res.status(201).send({ message: "Main created successfully" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).send({ error: "Main already exists" });
    }
    return res.status(500).send({ error: "Error creating main" });
  }
};



module.exports = controller;
