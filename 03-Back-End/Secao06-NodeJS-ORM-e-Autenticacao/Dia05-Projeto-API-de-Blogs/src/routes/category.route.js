const route = require('express').Router();
const { auth } = require('../middlewares');
const { categoryController } = require('../controllers');

route.post('/', auth.authentication, categoryController.create);
route.get('/', auth.authentication, categoryController.getAll);

module.exports = route;