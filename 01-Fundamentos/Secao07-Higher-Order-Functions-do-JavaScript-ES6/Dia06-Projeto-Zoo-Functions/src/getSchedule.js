const data = require('../data/zoo_data');

const dia = (day) => {
  if (day === 'Monday') return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  const msg = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
  const animal = data.species.filter((e) =>
    e.availability.includes(day)).map((a) => a.name);
  return { officeHour: msg, exhibition: animal };
};

const horarios = () => {
  const horario = {};
  Object.keys(data.hours).forEach((hour) => {
    horario[hour] = dia(hour);
  });
  return horario;
};

const getSchedule = (scheduleTarget) => {
  if (data.species.some((s) => s.name === scheduleTarget)) {
    return data.species.find((s) => s.name === scheduleTarget).availability;
  }
  if (Object.keys(data.hours).includes(scheduleTarget)) {
    const obj = { [scheduleTarget]: dia(scheduleTarget) };
    return obj;
  }
  return horarios();
};

module.exports = getSchedule;
