const { Category } = require('../models');

const validateCategories = async (req, res, next) => {
  const { categoryIds, content, title } = req.body;
  if (!categoryIds) return res.status(400).json({ message: 'Some required fields are missing' });
  if (!content || !title) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const checkCategory = async (categoryIds) => {
  const response = await Category.findAll();
  const check = categoryIds.filter((id) => {
    const some = response.some((c) => Number(c.id) === Number(id));
    return some;
  });
  if (check.length !== categoryIds.length || categoryIds.length === 0) {
    return { status: 400, data: { message: 'one or more "categoryIds not found' } };
  }
};

const verifyCategoryIds = async (categoryIds) => {
  const checkCategories = await Promise.all(
    categoryIds.map((categoryId) => Category.findByPk(categoryId)),
  );
  return !checkCategories.includes(null);
};

const validatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const areAllCategoriesValid = await verifyCategoryIds(categoryIds);

  if (!areAllCategoriesValid) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};

module.exports = {
  validateCategories,
  checkCategory,
  validatePost,
};