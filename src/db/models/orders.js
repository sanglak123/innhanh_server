'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ResultOrders, { foreignKey: 'order_id' });
    }
  }
  Orders.init(
    {
      code: DataTypes.STRING,
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      note: DataTypes.STRING,
      status: DataTypes.STRING,
      vat: DataTypes.INTEGER,
      link_file: DataTypes.STRING,
      file_design: DataTypes.STRING,
      deposit: DataTypes.FLOAT,
      total: DataTypes.FLOAT,
      filename: DataTypes.STRING,
      address: DataTypes.STRING,
      causes: DataTypes.TEXT,
      userCheck: DataTypes.STRING,
      password: DataTypes.STRING,
      deadline: DataTypes.INTEGER,
      time_start: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Orders',
    }
  );
  return Orders;
};
