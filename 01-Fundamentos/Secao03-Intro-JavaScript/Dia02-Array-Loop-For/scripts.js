let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//EXERCICIO 1
for (var i = 0; i < numbers.length; i+=1) {
  console.log(numbers[i]);
}

//EXERCICIO 2
let soma = 0;
for (let i = 0; i < numbers.length; i+=1) {
  soma += numbers[i];
}
console.log(soma);

//EXERCICIO 3
let sum = 0;
for (let i = 0; i < numbers.length; i+=1) {
  sum += numbers[i];
}
let media;
media = sum / numbers.length;
console.log(media);

//EXERCICIO 4
if (media > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor que 20');
}

//EXERCICIO 5
let maior = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maior) {
    maior = numbers[i];
  }
}
console.log(maior);

//EXERCICIO 6
let impar = 0;
for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 != 0) {
    impar += 1;
  }  
}
console.log(impar);

//EXERCICIO 7
let menor = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < menor) {
    menor = numbers[i];
  }
}
console.log(menor);

//EXERCICIO 8
let num = [];
let numero = 0;
for (let i = 0; i < 25; i += 1) {
  numero += 1;
  num.push(numero);
}
console.log(num);

//EXERCICIO 9
for (let i = 0; i < num.length; i += 1) {
  console.log(num[i]/2);
}

//EXERCICIO 10
let num1 = 1;

for (let i = 10; i > 0; i -= 1) {
  num1 *= i;
}
console.log(num1);

//EXERCICIO 11
let palavra = 'tryber';
let invertido ='';

for (let i = 0; i < palavra.length; i += 1) {
  invertido += palavra[palavra.length - 1 - i];
}
console.log(invertido);

//EXERCICIO 12
let array = ['java', 'javascript', 'python', 'html', 'css'];

let palavraMaior = array[0];
let palavraMenor = array[0];

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length > palavraMaior.length) {
    palavraMaior = array[index];
  }
}

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length < palavraMenor.length) {
    palavraMenor = array[index];
  }
}

console.log(palavraMaior);
console.log(palavraMenor);