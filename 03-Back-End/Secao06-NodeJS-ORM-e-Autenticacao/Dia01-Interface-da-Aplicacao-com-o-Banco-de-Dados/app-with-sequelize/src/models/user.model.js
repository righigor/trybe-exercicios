const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  (async () => {
    await sequelize.sync({ force: true });
    // As funções vão aqui
    const sara = await User.create({
      fullName: 'Sara Silva Santos',
      email: 'sara.ss@trybe.com'
    });
    console.log(sara.fullName);
    sara.fullName = "Jana Doe";
    await sara.save();
    console.log(sara.fullName);
  })();

  return User;
};

module.exports = UserModel;