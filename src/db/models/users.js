'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ResultOrders, { foreignKey: 'user_id' });
    }
  }
  Users.init(
    {
      displayname: DataTypes.STRING,
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
      admin: DataTypes.BOOLEAN,
      refresh_token: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
      isCVTV: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Users',
    }
  );
  return Users;
};
