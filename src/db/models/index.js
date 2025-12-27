'use strict';

require('dotenv').config();
const { sequelize } = require('../config/connection');

const Sequelize = require('sequelize');
const Users = require('./users');
const InNhanh79s = require('./innhanh79s');
const Brands = require('./brands');
const Categorys = require('./categorys');
const Products = require('./products');
const Ratings = require('./ratings');
const Notifications = require('./notifications');
const PaymentMethods = require('./paymentmethods');
const Images = require('./images');
const InputProducts = require('./inputproducts');
const Orders = require('./orders');
const ResultOrders = require('./resultorders');
const Scripts = require('./scripts');
const db = {};

db.Users = Users(sequelize, Sequelize);
db.InNhanh79s = InNhanh79s(sequelize, Sequelize);
db.Brands = Brands(sequelize, Sequelize);
db.Categorys = Categorys(sequelize, Sequelize);
db.Products = Products(sequelize, Sequelize);
db.Ratings = Ratings(sequelize, Sequelize);
db.Notifications = Notifications(sequelize, Sequelize);
db.PaymentMethods = PaymentMethods(sequelize, Sequelize);
db.Images = Images(sequelize, Sequelize);
db.InputProducts = InputProducts(sequelize, Sequelize);
db.Orders = Orders(sequelize, Sequelize);
db.ResultOrders = ResultOrders(sequelize, Sequelize);
db.Scripts = Scripts(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
