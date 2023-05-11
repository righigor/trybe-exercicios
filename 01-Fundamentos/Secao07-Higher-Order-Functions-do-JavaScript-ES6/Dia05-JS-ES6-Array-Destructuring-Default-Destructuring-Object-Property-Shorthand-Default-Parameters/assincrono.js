//ARRAY DESTRUCTURING
//EXERCICIO 1
const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

sum(primeNumbers[0], primeNumbers[2]) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [num1, num2, num3] = primeNumbers;
sum(num1, num3)

//EXERCICIO 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal]
console.log(comida, animal, bebida);

//EXERCICIO 3
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima
[,,, ...numerosPares] = numerosPares;
console.log(numerosPares);

//DEFAULT DESTRUCTURING
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

//OBJECT PROPERTY SHORTHAND
// const getPosition = (latitude, longitude) => ({
//   latitude: latitude,
//   longitude: longitude,
// });

const getPosition = (latitude, longitude) => {
  return {
    latitude,
    longitude,
  }
}

console.log(getPosition(-19.8157, -43.9542));

//DEFAULT PARAMETERS
const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value;
};

console.log(multiply(8, 2));