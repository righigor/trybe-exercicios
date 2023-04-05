// Desafio 11 - Crie a função generatePhoneNumber
const generatePhoneNumber = (array) => {
  const highestCount = (array) => {
    let count = 0;
    array = array.sort();
    let comparador = array[0];
    if (comparador < 0) {
      for (num of array) {
        if (num === comparador) {
          count += 1;
        }
      }
      return count;
    }
    else {
      array = array.reverse();
      comparador = array[0]
      for (num of array) {
        if (num === comparador) {
          count += 1;
        }
      }
      return count;
    }
  }
  if (array.length != 11) {
    return 'Array com tamanho incorreto.'
  }
  if (Math.max.apply(null, array) > 9 || Math.min.apply(null, array) || highestCount(array) >= 3) {
    return 'não é possível gerar um número de telefone com esses valores'
  }
}



























// Desafio 12 -  Crie a função triangleCheck
const triangleCheck = (lineA, lineB, lineC) => {
  if (lineA + lineB > lineC && lineA + lineC > lineB && lineB + lineC > lineA) {
    return true;
  }
  return false;
}
// Desafio 13 - Crie a função hydrate
frase = '1 cerveja, 5 cachaças'
const hydrate = (string) => {
  let num = [];
  for (palavra in string) {
    if (palavra === Number)
}
console.log(hydrate(frase));
























/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
