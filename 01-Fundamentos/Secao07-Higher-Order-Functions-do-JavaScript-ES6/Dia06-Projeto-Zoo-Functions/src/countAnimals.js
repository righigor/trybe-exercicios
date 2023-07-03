const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    const animais = {};
    data.species.forEach((especie) => {
      animais[especie.name] = especie.residents.length;
    });
    return animais;
  }
  if (animal.sex) {
    const animais = data.species.find((especie) => animal.species === especie.name)
      .residents.filter((cada) => cada.sex === animal.sex).length;
    return animais;
  }
  const animais = data.species.find((especie) => animal.species === especie.name)
    .residents.length;
  return animais;
};

module.exports = countAnimals;
