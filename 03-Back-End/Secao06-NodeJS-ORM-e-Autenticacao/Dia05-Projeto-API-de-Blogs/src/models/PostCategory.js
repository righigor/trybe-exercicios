const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategory,
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategory,
    });
  }

  return PostCategory;
};

module.exports = PostCategory;