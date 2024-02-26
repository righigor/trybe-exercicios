const { User } = require('../models');

const validateUser = async (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailTest = emailRegex.test(email);

  if (!emailTest) return res.status(400).json({ message: '"email" must be a valid email' });
  const user = await User.findOne({ where: { email } });
  if (user) return res.status(409).json({ message: 'User already registered' });
  next();
};

module.exports = { validateUser };