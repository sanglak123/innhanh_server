const { router_admins } = require('./admins');
const { router_auth } = require('./auth');
const { router_clients } = require('./clients');
const { router_data } = require('./data');

const root_router = require('express').Router();

root_router.use('/admins', router_admins);
root_router.use('/clients', router_clients);
root_router.use('/data', router_data);
root_router.use('/auth', router_auth);

module.exports = {
  root_router,
};
