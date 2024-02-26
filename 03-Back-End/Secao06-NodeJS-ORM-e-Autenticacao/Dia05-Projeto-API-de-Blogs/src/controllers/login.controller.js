const jwt = require('jsonwebtoken');
const { loginService } = require('../services');

const findLogin = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await loginService.findLogin(email, password);
  if (data.message) return res.status(status).json(data);
  const payload = {
    id: data.id,
    email: data.email,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
  return res.status(status).json({ token });
};

module.exports = {
  findLogin,
};
