const route = require('express').Router();
const { auth, categoriesMiddleware, postMiddleware } = require('../middlewares');
const { postController } = require('../controllers');

route.post(
  '/',
  auth.authentication,
  categoriesMiddleware.validatePost,
  // categoriesMiddleware.validateCategories,
  // categoriesMiddleware.checkCategory,
  postController.create,
);

route.get('/', auth.authentication, postController.getAll);

route.get('/search', auth.authentication, postController.search);
route.get('/:id', auth.authentication, postController.getById);

route.put(
  '/:id',
  auth.authentication,
  postMiddleware.validateUpdate,
  postController.update,
);

route.delete('/:id', auth.authentication, postController.deletePost);

module.exports = route;