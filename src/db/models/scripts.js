'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scripts extends Model {
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
  Scripts.init(
    {
      idProduct: DataTypes.INTEGER,
      code: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Scripts',
    }
  );
  return Scripts;
};
