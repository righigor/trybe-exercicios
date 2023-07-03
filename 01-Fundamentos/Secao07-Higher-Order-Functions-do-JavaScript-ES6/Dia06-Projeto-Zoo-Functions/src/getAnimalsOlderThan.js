const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animais = data.species.find((especie) => animal === especie.name);
  const animalSelecionado = animais.residents;
  return animalSelecionado.every((residente) => residente.age >= age);
};

module.exports = getAnimalsOlderThan;
