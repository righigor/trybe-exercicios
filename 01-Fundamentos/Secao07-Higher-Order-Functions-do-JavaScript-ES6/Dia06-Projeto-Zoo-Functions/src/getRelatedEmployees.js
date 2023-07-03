const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((empregado) => empregado.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const empregados = [];
  const gerentes = data.employees.filter((empregado) => empregado.managers.includes(managerId));
  gerentes.forEach((nomes) => empregados.push(`${nomes.firstName} ${nomes.lastName}`));
  return empregados;
};

module.exports = { isManager, getRelatedEmployees };
