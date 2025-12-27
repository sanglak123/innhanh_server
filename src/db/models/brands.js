'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.InNhanh79s, { foreignKey: 'idCom' });
    }
  }
  Brands.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      hotline: DataTypes.STRING,
      address: DataTypes.STRING,
      zalo: DataTypes.STRING,
      facebook: DataTypes.STRING,
      idCom: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Brands',
    }
  );
  return Brands;
};
