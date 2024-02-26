const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const { JWT_SECRET } = process.env;

const fetchUserId = async (authorization) => {
  const token = authorization.split(' ')[1];
  const secret = process.env.JWT_SECRET;
  const decoded = jwt.verify(token, secret);
  const { id } = decoded;
  return id;
};

const createUser = async (req, res) => {
  const { status, data } = await userService.createUser(req.body);
  if (data.message) return res.status(status).json(data);

  const payload = {
    id: data.id,
    email: data.email,
  };
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d',
  });
  return res.status(201).json({ token });
};

const getAll = async (req, res) => {
  const response = await userService.getAll();
  return res.status(200).json(response);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.getById(id);
  return res.status(status).json(data);
};

const deleteUser = async (req, res) => {
  const { authorization } = req.headers;
  const id = await fetchUserId(authorization);
  const { status } = await userService.deleteUser(id);
  return res.status(status).end();
};

module.exports = {
  createUser,
  getAll,
  getById,
  deleteUser,
};
