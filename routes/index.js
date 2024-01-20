// const routes = require('express').Router();

// const controller = require('../controllers');

// routes.get('/', controller.awesomeFunction);
// routes.get('/awesome', controller.aBryantsBBQSauce);

// module.exports = routes;

const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'))

module.exports = router;