let currentHour = 2;
let message = '';
if (currentHour >= 22) {
  message += 'Não deviríamos comer nada, é hora de dormir'
  console.log(message)
}
else if (currentHour >= 18 && currentHour < 22) {
  message += 'Rango da noite, vamos jantar:D'
  console.log(message)
}
else if (currentHour >= 14 && currentHour < 18) {
  message += 'Vamos fazer um bolo pro café da tarde'
  console.log(message)
}
else if (currentHour >= 11 && currentHour < 14) {
  message += 'Hora do almoço!!!'
  console.log(message)
}
else if (currentHour >= 4 && currentHour < 11) {
  message += 'hmmm, cheiro de café recém-passado'
  console.log(message)
}
else {
  console.log(message)
}

let weekDay = 'quarta-feira'
if (weekDay === 'segunda-feira' || weekDay === 'terca-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
  console.log('Oba mais um dia de aprendizado na Trybe')
}
else {
  console.log('FINALMENTE, descanço merecido!')
}

