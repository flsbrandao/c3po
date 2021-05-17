const routes = require('express').Router();

const CitiesController = new require('../controllers/CitiesController');

routes.post('/cities', CitiesController.create);
routes.get('/cities', CitiesController.show);

module.exports = routes;