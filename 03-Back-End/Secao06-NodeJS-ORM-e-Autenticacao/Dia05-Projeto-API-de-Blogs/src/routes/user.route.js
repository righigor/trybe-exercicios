const route = require('express').Router();
const { userMiddleware, auth } = require('../middlewares');
const { userController } = require('../controllers');

route.post('/', userMiddleware.validateUser, userController.createUser);
route.get('/', auth.authentication, userController.getAll);
route.get('/:id', auth.authentication, userController.getById);
route.delete('/me', auth.authentication, userController.deleteUser);

module.exports = route;