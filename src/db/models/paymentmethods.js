'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentMethods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PaymentMethods.init(
    {
      name: DataTypes.STRING,
      brand: DataTypes.STRING,
      number: DataTypes.STRING,
      owner: DataTypes.STRING,
      qr_code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'PaymentMethods',
    }
  );
  return PaymentMethods;
};
