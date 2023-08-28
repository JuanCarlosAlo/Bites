const { v4 } = require("uuid");
const UserModel = require("../schemes/users.scheme");
const DrinksModel = require("../schemes/drinks.scheme");


const controller = {};

controller.getAllDrinks = async (req, res) => {
  const allAppetizers = await DrinksModel.find();

  try {
    res.status(200).send(allAppetizers);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.getDrinkId = async (req, res) => {
  const autentifiedAppetizer = await DrinksModel.findById(req.params.id);

  try {
    res.status(200).send(autentifiedAppetizer);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.createDrink = async (req, res) => {
  try {
    const { name, type, description, price, img } = req.body;

    const newDrink = new DrinksModel({
      _id: v4(),
      name,
      type,
      description,
      price,
      img,
    });

    await newDrink.save();

    return res.status(201).send({ message: "Drink created successfully" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).send({ error: "Drink already exists" });
    }
    return res.status(500).send({ error: "Error creating drink" });
  }
};



module.exports = controller;
