const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const empregado = data.employees.find((employee) => employee.id === id);
  const animalId = empregado.responsibleFor[0];
  const animal = data.species.find((species) => species.id === animalId);
  const maisVelho = animal.residents.reduce((velho, novo) => {
    if (novo.age > velho.age) {
      return novo;
    } return velho;
  });
  return [maisVelho.name, maisVelho.sex, maisVelho.age];
};

module.exports = getOldestFromFirstSpecies;
