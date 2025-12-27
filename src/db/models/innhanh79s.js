'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InNhanh79s extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Brands, { foreignKey: 'idCom' });
    }
  }
  InNhanh79s.init(
    {
      email: DataTypes.STRING,
      hotline: DataTypes.STRING,
      zalo: DataTypes.STRING,
      facebook: DataTypes.STRING,
      logo: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'InNhanh79s',
    }
  );
  return InNhanh79s;
};
