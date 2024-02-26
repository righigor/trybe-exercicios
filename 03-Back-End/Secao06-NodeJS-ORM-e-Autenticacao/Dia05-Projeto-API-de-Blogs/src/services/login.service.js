const { User } = require('../models');

const findLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) return { status: 400, data: { message: 'Invalid fields' } };

  if (user.password !== password) return { status: 400, data: { message: 'Invalid fields' } };
  return { status: 200, data: user };
};

module.exports = {
  findLogin,
};
