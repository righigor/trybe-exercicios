const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length) return ids.map((id) => data.species.find((specie) => specie.id === id));
  return [];
};

module.exports = getSpeciesByIds;
