// EXERCICIO 1
function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
};
imprimeIdade();

// EXERCICIO 2
const pessoa = {
  nome: 'Henri',
  idade: 20
}
pessoa.nome = 'Luna';
pessoa.idade = 19;
console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);

// EXERCICIO 3
let favoriteFood = 'Lasanha';
favoriteFood = 'Hambúrguer';
console.log(favoriteFood);

// EXERCICIO 4
const name = 'Adriana';
const lastName = 'Soares';
console.log(`Olá, ${name} ${lastName}!`);
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);

// EXERCICIO 5
const numeroAleatorio = () => Math.random();
console.log(numeroAleatorio());

// EXERCICIO 6
let name1 = 'Ivan'
const hello = (name1) => `Olá, ${name1}!`;
console.log(hello(name1));

// EXERCICIO 7
let nome = 'Ivan';
let sobrenome = 'Pires';
const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
console.log(nomeCompleto(nome, sobrenome));

// EXERCICIO 8
let speed = 150;
const velocidade = (speed >= 120) ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
console.log(velocidade);