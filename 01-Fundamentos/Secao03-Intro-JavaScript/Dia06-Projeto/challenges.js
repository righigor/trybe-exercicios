// Desafio 1 - Crie a função compareTrue
const compareTrue = (parametro1, parametro2) => parametro1 && parametro2 === true ? true : false;
// Desafio 2 - Crie a função splitSentence
const splitSentence = (frase) => {return frase.split(' ')};
// Desafio 3 - Crie a função concatName
const concatName = (lista) => {
  let primeiroTermo = lista[lista.length - 1];
  let ultimoTermo = lista[0];
  return `${primeiroTermo}, ${ultimoTermo}`;
}
// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => {return (wins*3) + ties;}
// Desafio 5 - Crie a função highestCount
const highestCount = (lista) => {
  let count = 0;
  lista = lista.sort();
  let comparador = lista[0];
  if (comparador < 0) {
    for (num of lista) {
      if (num === comparador) {
        count += 1;
      }
    }
    return count;
  }
  else {
    lista = lista.reverse();
    comparador = lista[0]
    for (num of lista) {
      if (num === comparador) {
        count += 1;
      }
    }
    return count;
  }
}
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height)/2;
const calcRectangleArea = (base, height) => base * height;
const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    let valorDaArea = calcTriangleArea(base, height);
    return `O valor da área do triângulo é de: ${valorDaArea}`;
  } else if (form ==='retângulo') {
    let valorDaArea = calcRectangleArea(base, height);
    return `O valor da área do retângulo é de: ${valorDaArea}`;
  }
  else {
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
}
// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  if (mouse > cat1 && mouse < cat2) {
    let dist1 = mouse - cat1;
    let dist2 = cat2 - mouse;
    if (dist1 < dist2) {
      return 'cat1';
    }
    else if (dist1 > dist2) {
      return 'cat2';
    }
    else {
      return'os gatos trombam e o rato foge';
    }
  }
  else if (mouse > cat2 && mouse < cat1) {
    let dist1 = cat1 - mouse;
    let dist2 = mouse - cat2;
    if (dist1 < dist2) {
      return 'cat1';
    }
    else if (dist1 > dist2) {
      return 'cat2';
    }
    else {
      return'os gatos trombam e o rato foge';
    }
  }
  else {
    let dist1 = cat1 - mouse;
    let dist2 = cat2 - mouse;
    if (dist1 < dist2) {
      return 'cat1';
    }
    else if (dist1 > dist2) {
      return 'cat2';
    }
    else {
      return'os gatos trombam e o rato foge';
    }
  }
}
// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (lista) => {
  let list = [];
  for (num of lista) {
    if (num % 3 === 0 && num % 5 === 0) {
      list.push('fizzBuzz');
    }
    else if (num % 3 === 0 && num % 5 != 0) {
      list.push('fizz');
    }
    else if (num % 5 === 0 && num % 3 != 0) {
      list.push('buzz');
    }
    else {
      list.push('bug!');
    }
  }
  return list;
}
// Desafio 9 - Crie a função encode e a função decode
const encode = (string) => {
  for (let letra of string) {
    if (letra === 'a') {
      string = string.replace('a', '1');
    }
    else if (letra === 'e') {
      string = string.replace('e', '2');
    }
    else if (letra === 'i') {
      string = string.replace('i', '3');
    }
    else if (letra === 'o') {
      string = string.replace('o', '4');
    }
    else if (letra === 'u') {
      string = string.replace('u', '5');
    }
  }
  return string;
}
const decode = (string) => {
  for (letra of string) {
    if (letra === '1') {
      string = string.replace(letra, 'a');
    }
    else if (letra === '2') {
      string = string.replace(letra, 'e');
    }
    else if (letra === '3') {
      string = string.replace(letra, 'i');
    }
    else if (letra === '4') {
      string = string.replace(letra, 'o');
    }
    else if (letra === '5') {
      string = string.replace(letra, 'u');
    }
  }
  return string;
}
// Desafio 10 - Crie a função techList
const techList = (array, string) => {
  listaObj = [];
  array = array.sort()
  for (palavra of array) {
    obj = {};
    addTech = palavra;
    obj.tech = addTech
    obj.name = string;
    listaObj.push(obj);
  }
return listaObj;
}
// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
