'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResultOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Orders, { foreignKey: 'order_id' });
      this.belongsTo(models.Users, { foreignKey: 'user_id' });
      this.belongsTo(models.Products, { foreignKey: 'product_id' });
    }
  }
  ResultOrders.init(
    {
      order_id: DataTypes.INTEGER,
      product_img: DataTypes.TEXT,
      list_inputs: DataTypes.TEXT,
      count: DataTypes.INTEGER,
      unit_price: DataTypes.FLOAT,
      user_id: DataTypes.INTEGER,
      progress: DataTypes.TEXT,
      status: DataTypes.STRING,
      product_id: DataTypes.INTEGER,
      time_start: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'ResultOrders',
    }
  );
  return ResultOrders;
};
