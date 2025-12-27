const { router_data_admins } = require('./admins');
const { router_data_clients } = require('./clients');

const router_data = require('express').Router();

router_data.use('/admins', router_data_admins);

router_data.use('/clients', router_data_clients);

module.exports = {
  router_data,
};
