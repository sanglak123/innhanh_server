'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Categorys, { foreignKey: 'idCate' });

      this.hasMany(models.Ratings, { foreignKey: 'idProduct' });
      this.hasMany(models.Images, { foreignKey: 'idProduct' });
      this.hasMany(models.InputProducts, { foreignKey: 'idProduct' });
      this.hasMany(models.ResultOrders, { foreignKey: 'product_id' });
      this.hasOne(models.Scripts, { foreignKey: 'idProduct' });
    }
  }
  Products.init(
    {
      name: DataTypes.STRING,
      link: DataTypes.STRING,
      intro: DataTypes.STRING,
      decs: DataTypes.TEXT,
      best: DataTypes.BOOLEAN,
      tags: DataTypes.TEXT,
      min_print: DataTypes.INTEGER,
      idCate: DataTypes.INTEGER,
      calculator: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Products',
    }
  );
  return Products;
};
