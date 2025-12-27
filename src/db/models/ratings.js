'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ratings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Products, { foreignKey: 'idProduct' });
    }
  }
  Ratings.init(
    {
      idProduct: DataTypes.INTEGER,
      star: DataTypes.INTEGER,
      user: DataTypes.STRING,
      position: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      mess: DataTypes.TEXT,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Ratings',
    }
  );
  return Ratings;
};
