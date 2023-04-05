# Dia 06: Projeto - Playground Functions

Agora é hora de por em prática todo o conhecimento adquirido durante a seção 3. Utilizado conceitos de `loop`, `array`, `funções` e `objetos`. Vou densenvolver funções seguindo os requisitos especificados para o correto comportamento de cada umas delas.

## Funções

###  compareTrue

A função <code>compareTrue<code> ao receber dois parâmetros booleanos deve:

- Retornar `true` se ambos os valores forem verdadeiros;
- Retornar `false` se um ou ambos os parâmetros forem falsos.


### splitSentence

A função <code>splitSentence<code> recebe uma string como parâmetro e deve retornar um array com as palavras separadas.

- A função `splitSentence` deve retornar o valor `['go', 'Trybe']` quando receber como parâmetro a string `'go Trybe'`;
- A função `splitSentence` deve retornar o valor `['vamo', 'que', 'vamo']` quando receber como parâmetro a string `'vamo que vamo'`;
- A função `splitSentence` deve retornar o valor `['foguete']` quando receber como parâmetro a string `'foguete'`.

### concatName

Implemente a função <code>concatName<code> que recebe um array de strings e retorna uma string com o último e o primeiro item.

- A função `concatName` deve retornar o valor `'Paolillo, Lucas'` quando receber como parâmetro o array `['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']`;
- A função `concatName` deve retornar `'ré, foguete'` quando receber como parâmetro o array `['foguete', 'não', 'tem', 'ré']`;
- A função `concatName` deve retornar `'captain, captain'` quando receber como parâmetro o array `['captain', 'my', 'captain']`.

### footballPoints

Implemente a função <code>footballPoints</code> que calcula a pontuação de um time de futebol em um campeonato a partir do número de vitórias e empates. 

- A função `footballPoints` deve retornar o valor `50` pontos quando o time tenha 14 vitórias e 8 empates;
- A função `footballPoints` deve retornar o valor `5` pontos quando o time tenha 1 vitória e 2 empates;
- A função `footballPoints` deve retornar o valor `0` pontos quando o time tenha 0 vitórias e 0 empates.


### highestCount

Implemente a função <code>highestCount</code> que deverá retornar a quantidade de vezes que o maior número se repete ao receber um array de números. 

- A função `highestCount` deve retornar `2` quando receber o parâmetro `[9, 1, 2, 3, 9, 5, 7]`;
- A função `highestCount` deve retornar `1` quando receber o parâmetro `[0, 4, 4, 4, 9, 2, 1]`;
- A função `highestCount` deve retornar `3` quando receber o parâmetro `[0, 0, 0]`.

### calcTriangleArea - calcRectangleArea - calcAllAreas

Implemente 3 funções. Uma função que calcula a área de um triângulo, outra que calcula a área de um retângulo e uma função que exiba o resultado desses cálculos de acordo com o parâmetro passado para função.
    
- Realize o cálculo da área total do triângulo utilizando a fórmula `(base * altura) / 2`;
- Realize o cálculo da área total do retângulo utilizando a fórmula `(base * altura)`;
- A função `calcAllAreas` que recebe 3 parâmetros sendo eles, o valor da base (`base`), o valor da altura (`height`) e a forma geométrica (`form`) que eu quero obter o valor da área, podendo ser `triângulo` ou `retângulo`.

### catAndMouse

Implemente a função <code>catAndMouse</code> que verifica qual gato está mais perto do rato

- Calcule as distâncias entre o rato e cada um dos gatos e retorne qual dos felinos está mais próximo do rato:
- Retorne a string `'cat2'` se o gato `cat2` estiver mais próximo do rato;
- Retorne a string `'cat1'` se o gato `cat1` estiver mais próximo do rato;
- Retorne a string `'os gatos trombam e o rato foge'` caso os gatos estejam na mesma distância do rato.

### fizzBuzz

Implemente a função <code>fizzBuzz</code> que recebe um array de números e retorna um array de string de acordo com o resultado
    
- Retorne a string `'fizz'` para cada número do array que seja divisível apenas por 3;
- Retorne a string `'buzz'` para cada número do array que seja divisível apenas por 5;
- Retorne a string `'fizzBuzz'` para cada número do array que seja divisível por 3 **e** 5;
- Retorne a string `'bug!'` para cada número do array que não seja dividido por 3 nem por 5.

### encode - decode

Implemente uma função que codifica e decodifica uma frase, trocando vogais por números ou números por vogais.

- Para codificar a frase utilize a função `encode` que recebe uma string como parâmetro e deverá trocar todas as **vogais minúsculas por números**, de acordo com o formato:
  a -> 1 
  e -> 2 
  i -> 3 
  o -> 4 
  u -> 5

- Para decodificar a frase utilize a função `decode` que recebe uma string contendo letras e números como parâmetro e deverá trocar todos os **números por vogais minúsculas**, de acordo com o formato: 
  1 -> a
  2 -> e
  3 -> i
  4 -> o
  5 -> u

### techList

Implemente a função <code>techList</code> que recebe um array e uma string e retorna um array de objetos.
A função deverá retornar:

- Um array vazio caso não receba nenhum parâmetro;
- Um array de objetos, contendo um objeto para cada tecnologia do array.