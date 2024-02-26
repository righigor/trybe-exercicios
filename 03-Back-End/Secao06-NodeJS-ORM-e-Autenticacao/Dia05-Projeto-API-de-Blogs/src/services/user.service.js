const { User } = require('../models');

const createUser = ({ displayName, email, password, image }) => {
  if (displayName.length < 8) {
    return {
      status: 400, data: { message: '"displayName" length must be at least 8 characters long' },
    };
  }
  if (password.length < 6) {
    return {
      status: 400, data: { message: '"password" length must be at least 6 characters long' },
    };
  }
  const response = User.create({
    displayName, email, password, image,
  });
  return { status: 201, data: response };
};

const getAll = async () => {
  const response = User.findAll({ attributes: { exclude: ['password'] } });
  return response;
};

const getById = async (id) => {
  const response = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  console.log(response);
  if (!response) return { status: 404, data: { message: 'User does not exist' } };
  return { status: 200, data: response };
};

const deleteUser = async (id) => {
  console.log(id);
  await User.destroy({ where: { id } });
  return { status: 204 };
};

module.exports = {
  createUser,
  getAll,
  getById,
  deleteUser,
};