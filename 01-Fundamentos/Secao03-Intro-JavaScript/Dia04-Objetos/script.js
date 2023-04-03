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
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda, ' + info.personagem)
let recorrente = {
  recorrente: 'Sim'
}
Object.assign(info, recorrente)
//console.log(info['recorrente'])
for (keys in info) {
 // console.log(keys)
}
for (values in info) {
 // console.log(info[values])
}
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}
for (keys in info)  {
  if (
    keys === 'recorrente' && info[keys] === 'Sim' && info2[keys] === 'Sim'
  )
  {
    console.log('Ambos recorrente');
  }
  else {
  console.log(info2[keys] + ' e ' + info[keys]);
  }
}

// EXERCICIO 5
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo + "'");

leitor.livrosFavoritos.push (
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
)
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');