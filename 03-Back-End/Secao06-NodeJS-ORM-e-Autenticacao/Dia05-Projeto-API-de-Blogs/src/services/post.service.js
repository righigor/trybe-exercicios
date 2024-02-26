const { BlogPost, PostCategory, Category, User, sequelize } = require('../models');

const createPost = async (title, content, categoryIds, userId) => {
  const date = new Date();
  const result = await sequelize.transaction(async (t) => {
    const createdPost = await BlogPost.create({
      title,
      content,
      userId,
      published: date,
      updated: date,
    }, { transaction: t });

    await Promise.all(categoryIds.map((categoryId) => PostCategory.create({
      postId: createdPost.id,
      categoryId,
    }, { transaction: t })));
   
    return createdPost; 
  });
  return result;
};

const getAll = async () => {
  const response = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return response;
};
const getById = async (id) => {
  const [posts] = await BlogPost.findAll({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!posts) return { status: 404, data: { message: 'Post does not exist' } };
  return { status: 200, data: posts };
};
const update = async ({ userId, id, title, content }) => {
  const post = await getById(id);
  if (post.data.message) return post;
  if (post.data.user.id !== userId) return { status: 401, data: { message: 'Unauthorized user' } };
  await BlogPost.update({ title, content }, { where: { id } });
  const updated = await getById(id);
  return updated;
};
const deletePost = async (id, userId) => {
  const post = await getById(id);
  if (post.data.message) return post;
  if (post.data.user.id !== userId) return { status: 401, data: { message: 'Unauthorized user' } };
  await BlogPost.destroy({ where: { id } });
  return { status: 204 };
};
module.exports = { createPost, getAll, getById, update, deletePost };