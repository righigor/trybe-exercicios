//EXERCICIO 1 - FOR EACH

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];
emailListInData.forEach((email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados`);
 })

 //EXERCICIO 2 FIND

const numbers = [19, 21, 30, 3, 45, 22, 15];
const pegaNumero = numbers.find((num) => num % 3 === 0 && num % 5 === 0)
console.log(pegaNumero);

const names = ['João', 'Irene', 'Fernando', 'Maria'];
const verificaPalavra = names.find((name) => name.length === 5);
console.log(verificaPalavra);

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];
const checaId = musicas.find((musica) => musica.id === '31031685')
console.log(checaId.title);

//EXERCICIO 3 SOME E EVERY

const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
const hasName = (arr, name) => {
  return arr.some((names) => names === name)
};
console.log(hasName(names2, 'Ana'));
console.log(hasName(names2, 'Pedro'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
const verifyAges = (arr, idadeMin) => {
  return arr.every((aluno) => aluno.age >= idadeMin);
}
console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));