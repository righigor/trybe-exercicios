//EXERCICIO 1
motor = false;
const motorPartida = (motor === true || false) ? `desligar motor` : `ligar motor`;
console.log(motorPartida);

//EXERCICIO 2
let raio = 2;
const calcArea = (raio) => (raio**2)*Math.PI;
console.log(calcArea(raio));

//EXERCICIO 3
const longestWord = (texto) => {
  const lista = texto.split(' ');
  let contador = 0;
  let resultado = '';
  
  for(const palavra of lista) {
    if(palavra.length > contador) {
      contador = palavra.length;
      resultado = palavra;
    }
  }
  return resultado;
}
console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));