const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const pagantes = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((e) => {
    if (e.age < 18) {
      pagantes.child += 1;
    } if (e.age >= 18 && e.age < 50) {
      pagantes.adult += 1;
    } if (e.age >= 50) {
      pagantes.senior += 1;
    }
  });
  return pagantes;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) return 0;
  const obj = countEntrants(entrants);
  const valorChild = obj.child * data.prices.child;
  const valorAdult = obj.adult * data.prices.adult;
  const valorSenior = obj.senior * data.prices.senior;
  const total = valorChild + valorAdult + valorSenior;
  return total;
};

module.exports = { calculateEntry, countEntrants };
