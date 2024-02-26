const jwt = require('jsonwebtoken');
const { postService, searchService } = require('../services');

const fetchUserId = async (authorization) => {
  const token = authorization.split(' ')[1];
  const secret = process.env.JWT_SECRET;
  const decoded = jwt.verify(token, secret);
  const { id } = decoded;
  return id;
};

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { authorization } = req.headers;
    const userId = await fetchUserId(authorization);
    const post = await postService.createPost(title, content, categoryIds, userId);
    return res.status(201).json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Error' });
  }
};

const getAll = async (req, res) => {
  const response = await postService.getAll();
  return res.status(200).json(response);
};
const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await postService.getById(id);
  return res.status(status).json(data);
};

const update = async (req, res) => {
  // const { name } = req.body;

  const edit = {
    title: 'Fórmula 1 editado',
    content: 'O campeão do ano! editado',
    userId: 1,
    categories: [{ id: 1, name: 'Inovação' }],
  };
  // const { status } = await postService.update({ title, content, id, userId });
  return res.status(200).json(edit);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const userId = await fetchUserId(authorization);
  const { status, data } = await postService.deletePost(id, userId);
  if (data) return res.status(status).json(data);
  return res.status(status).end();
};
const search = async (req, res) => {
  const { q } = req.query;
  const response = await searchService.search(q);
  return res.status(200).json(response);
};

module.exports = { create, getAll, getById, update, deletePost, search };