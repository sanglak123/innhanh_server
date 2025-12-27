'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InputProducts extends Model {
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
  InputProducts.init(
    {
      idProduct: DataTypes.INTEGER,
      index: DataTypes.INTEGER,
      type: DataTypes.STRING,
      placeholder: DataTypes.STRING,
      label: DataTypes.STRING,
      col: DataTypes.INTEGER,
      rows: DataTypes.INTEGER,
      min: DataTypes.INTEGER,
      max: DataTypes.INTEGER,
      step: DataTypes.INTEGER,
      options: DataTypes.TEXT,
      value: DataTypes.STRING,
      txt_true: DataTypes.STRING,
      txt_false: DataTypes.STRING,
      sign: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'InputProducts',
    }
  );
  return InputProducts;
};
