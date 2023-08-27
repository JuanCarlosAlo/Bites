const { v4 } = require("uuid");
const UserModel = require("../schemes/users.scheme");
const AppetizersModel = require("../schemes/appetizer.scheme");
const MainModel = require("../schemes/main.scheme");
const SnacksModel = require("../schemes/snacks.scheme");
const DrinksModel = require("../schemes/drinks.scheme");


const controller = {};


controller.createReview = async (req, res) => {
  try {
    const { reviwedItems } = req.body;

    const calculateAverage = (ratings) => {
      const validRatings = ratings.filter(rating => rating !== 0);

      if (validRatings.length === 0) {
        return 0;
      }
      const sum = validRatings.reduce((total, rating) => total + rating, 0);
      return sum / validRatings.length;
    };

    for (const item of reviwedItems) {
      const { id, rating } = item;

      const allApetizers = await AppetizersModel.find({ _id: id });
      const allMain = await MainModel.find({ _id: id });
      const allSnacks = await SnacksModel.find({ _id: id });
      const allDrinks = await DrinksModel.find({ _id: id });

      const ratings = [
        ...allApetizers.map(snack => snack.rating || 0),
        ...allMain.map(drink => drink.rating || 0),
        ...allSnacks.map(snack => snack.rating || 0),
        ...allDrinks.map(drink => drink.rating || 0),
        rating
      ];

      const averageRating = calculateAverage(ratings);

      if (allApetizers.length > 0) {
        allApetizers.forEach(async apetizer => {
          apetizer.rating = averageRating;
          await apetizer.save();
        });
      }

      if (allMain.length > 0) {
        allMain.forEach(async main => {
          main.rating = averageRating;
          await main.save();
        });
      }

      if (allSnacks.length > 0) {
        allSnacks.forEach(async snack => {
          snack.rating = averageRating;
          await snack.save();
        });
      }

      if (allDrinks.length > 0) {
        allDrinks.forEach(async drink => {
          drink.rating = averageRating;
          await drink.save();
        });
      }
    }

    return res.status(201).send({ message: "Reviews updated successfully" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).send({ error: "Item not found" });
    }
    return res.status(500).send({ error: "Error updating reviews" });
  }
};


module.exports = controller;
