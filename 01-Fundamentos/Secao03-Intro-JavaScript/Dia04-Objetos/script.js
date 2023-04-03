// EXERCICIO 1
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    gold: 2,
    silver: 3,
  },
}
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

//console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' de idade.')
//console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes.')
//console.log('A jogadora possui ' + player.medals.gold + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.')

// EXERCICIO 2
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
}
for (let nome in names) {
  console.log('olá, ' + names[nome])
}

// EXERCICIO 3
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}

for (let keys in car) {
  console.log(keys + ': ' + car[keys])
}

// EXERCICIO 4
