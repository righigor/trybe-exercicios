const route = require('express').Router();
const { loginController } = require('../controllers/index');
const { loginMiddleware } = require('../middlewares');

route.post('/', loginMiddleware.validateLogin, loginController.findLogin);

module.exports = route;