const { v4 } = require("uuid");
const AppetizersModel = require("../schemes/appetizer.scheme");
const MainModel = require("../schemes/main.scheme");
const SnacksModel = require("../schemes/snacks.scheme");
const DrinksModel = require("../schemes/drinks.scheme");

const controller = {};

controller.getAllCartItems = async (req, res) => {
  const { cartItems } = req.body;


  try {
    let allItems = [];
    const allApetizers = cartItems.map(async (id) => {
      const foundItem = await AppetizersModel.findById(id);
      if (foundItem) return foundItem
    });
    const allMain = cartItems.map(async (id) => {
      const foundItem = await MainModel.findById(id);
      if (foundItem) return foundItem
    });
    const allSnacks = cartItems.map(async (id) => {
      const foundItem = await SnacksModel.findById(id);
      if (foundItem) return foundItem
    });
    const allDrinks = cartItems.map(async (id) => {
      const foundItem = await DrinksModel.findById(id);
      if (foundItem) return foundItem
    });


    const apetizersResults = await Promise.all(allApetizers);
    const mainResults = await Promise.all(allMain);
    const snacksResults = await Promise.all(allSnacks);
    const drinksResults = await Promise.all(allDrinks);

    allItems.push(...apetizersResults, ...mainResults, ...snacksResults, ...drinksResults);
    allItems = allItems.filter((item) => item !== null && item !== undefined);


    res.status(200).send(allItems);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

module.exports = controller;
