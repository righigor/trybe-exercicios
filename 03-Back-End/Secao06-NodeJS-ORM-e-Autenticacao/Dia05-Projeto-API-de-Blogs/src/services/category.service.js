const { Category } = require('../models');

const create = async (name) => {
  if (!name) return { status: 400, data: { message: '"name" is required' } };
  const response = await Category.create({ name });
  return { status: 201, data: response };
};

const getAll = async () => {
  const response = await Category.findAll();
  return { status: 200, data: response };
};

module.exports = {
  create,
  getAll,
};