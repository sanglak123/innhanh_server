const { controller_data_clients } = require('../../controller/data/clients');

const router_data_clients = require('express').Router();

router_data_clients.get('/products', controller_data_clients.Products);

router_data_clients.get('/best-seller', controller_data_clients.BestSeller);

router_data_clients.get('/categorys', controller_data_clients.Categorys);

router_data_clients.get('/images', controller_data_clients.Images);

router_data_clients.get('/innhanh79', controller_data_clients.InNhanh79);

router_data_clients.get('/cvtv', controller_data_clients.ListCVTV);

module.exports = {
  router_data_clients,
};
