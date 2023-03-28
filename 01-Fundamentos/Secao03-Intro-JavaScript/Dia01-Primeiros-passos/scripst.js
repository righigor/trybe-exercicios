let a = 61;
let b = 16;
let c = 32;
//EXERCICIO 1
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//EXERCICIO 2
if (a > b) {
  console.log("a maior que b");
} else {
  console.log("a menor que b");
}

//EXERCICIO 3
if (a > b && a > c) {
  console.log(a);
}
else if (b > a && b > c) {
  console.log(b);
}
else if (c > a && c > b)  {
  console.log(c);
}

//EXERCICIO 4
let d = -10;
let e = 10;

if (d > 0) {
  console.log('positivo');
}
else if (d < 0) {
  console.log('negativo');
}
if (e > 0) {
  console.log('positivo');
}
else if (e < 0) {
  console.log('negativo');
}
if (d === 0) {
  console.log('zero');
} 
else if (e === 0) {
  console.log('zero');
}

//EXERCICIO 5
let angulo1 = 30;
let angulo2 = 90;
let angulo3 = 60;
let anguloTotal = angulo1 + angulo2 + angulo3;

if (anguloTotal === 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
  console.log(true);
}
else {
  console.log(false);
}

//EXERCICIO 6
let peca = '';
peca = 'rainha';

switch (peca) {
  case 'cavalo':
    console.log('cavalo: andar em L');
    break;
  case 'peão':
    console.log('peão: andar um casa para frente');
    break;
  case 'rainha':
    console.log('rainha: diagonal, horizontal ou vertical');
    break;
  case 'rei':
    console.log('rei: andar uma casa para qualquer direção');
    break;
  case 'bispo':
    console.log('bispo: diagonal');
    break;
}

//EXERCICIO 7
let nota;
nota = 90;

if (nota < 0 || nota > 100) {
  console.log('nota inválida');
}
else if (nota > 90) {
  console.log('Conceito A');
}
else if (nota > 80) {
  console.log('Conceito B');
}
else if (nota > 70) {
  console.log('Conceito C');
}
else if (nota > 60) {
  console.log('Conceito D');
}
else if (nota > 50) {
  console.log('Conceito E');
}
else {
  console.log('Conceito F');
}

//EXERCICIO 8
let num1 = 11;
let num2 = 21;
let num3 = 33;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  console.log(true);
}
else {
  console.log(false);
}

//EXERCICIO 9
let num4 = 11;
let num5 = 21;
let num6 = 33;

if (num4 % 2 != 0 || num5 % 2 != 0 || num6 % 2 != 0) {
  console.log(true);
}
else {
  console.log(false);
}

//EXERCICIO 10
let custo;
let venda;

custo = 100;
venda = 500;

if (custo >= 0 && venda >= 0) {
  let lucro = (venda - custo) * 1000;
  console.log(lucro);
}
else {
  console.log('erro');
}

//EXERCICIO 11
let salBruto;
let salLiquido;
let aliquotaInss8 = 0.08;
let aliquotaInss9 = 0.09;
let aliquotaInss11 = 0.11;
let aliquotaInssmax = 570.88;
let aliquotaIr7 = 0.075;
let aliquotaIr15 = 0.15;
let aliquotaIr22 = 0.225;
let aliquotaIr27 = 0.275;

salBruto = 5000;

if (salBruto < 1556.94) {
  salLiquido = salBruto - (salBruto * aliquotaInss8);
}
else if (salBruto >= 1556.95 && salBruto <= 2594.92) {
  salLiquido = salBruto - (salBruto * aliquotaInss9);
}
else if (salBruto >= 2594.93 && salBruto <= 5189.82) {
  salLiquido = salBruto - (salBruto * aliquotaInss11);
}
else if (salBruto > 5189.83) {
  salLiquido = salBruto - (salBruto * aliquotaInssmax);
}
if (salLiquido < 1903.98) {
  console.log(salLiquido)
}
else if (salLiquido >= 1903.99 && salLiquido <= 2826.65) {
  salLiquido = salLiquido - ((salLiquido * aliquotaIr7) - 142.8);
  console.log(salLiquido)
}
else if (salLiquido >= 2826.66 && salLiquido <= 3751.05) {
  salLiquido = salLiquido - ((salLiquido * aliquotaIr15) - 354.8);
  console.log(salLiquido)
}
else if (salLiquido >= 3751.06 && salLiquido <= 4664.68) {
  salLiquido = salLiquido - ((salLiquido * aliquotaIr22) - 636.13);
  console.log(salLiquido)
}
else if (salLiquido >= 4664.69) {
  salLiquido = salLiquido - ((salLiquido * aliquotaIr27) - 869.36);
  console.log(salLiquido)
}