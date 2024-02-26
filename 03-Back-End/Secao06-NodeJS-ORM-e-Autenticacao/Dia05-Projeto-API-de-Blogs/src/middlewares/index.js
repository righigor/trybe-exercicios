const loginMiddleware = require('./validateLogin');
const userMiddleware = require('./validateUser');
const auth = require('./authentication');
const categoriesMiddleware = require('./validateCategories');
const postMiddleware = require('./validateUpdate');

module.exports = {
  loginMiddleware,
  userMiddleware,
  auth,
  categoriesMiddleware,
  postMiddleware,
};