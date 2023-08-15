const { v4 } = require("uuid");
const AppetizersModel = require("../schemes/appetizer.scheme");
const MainModel = require("../schemes/main.scheme");
const SnacksModel = require("../schemes/snacks.scheme");
const DrinksModel = require("../schemes/drinks.scheme");

const controller = {};

controller.getAllRecomendedItems = async (req, res) => {
  try {
    const allApetizers = await AppetizersModel.find();
    const allMain = await MainModel.find();
    const allSnacks = await SnacksModel.find();
    const allDrinks = await DrinksModel.find();

    const allItems = [...allApetizers, ...allMain, ...allSnacks, ...allDrinks];

    res.status(200).send(allItems);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};


module.exports = controller;
