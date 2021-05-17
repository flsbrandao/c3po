const routes = require('express').Router();

const CustomersController = new require('../controllers/CustomersController');

routes.post('/customers', CustomersController.create);
routes.put('/customers/:id', CustomersController.update);
routes.delete('/customers/:id', CustomersController.destroy);
routes.get('/customers', CustomersController.show)

module.exports = routes;