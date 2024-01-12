const routes = require('express').Router();

const controller = require('../controllers');

routes.get('/', controller.awesomeFunction);
routes.get('/awesome', controller.aBryantsBBQSauce);

module.exports = routes;