const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName) {
    return data.employees.find((n) => n.firstName === employeeName || n.lastName === employeeName);
  }
  return {};
};

module.exports = getEmployeeByName;
