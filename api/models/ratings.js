'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ratings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Ratings.init({
    movieId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avgRating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }

  }, {
    sequelize,
    modelName: 'ratings',
  });
  return Ratings;
};