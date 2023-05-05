//EXERCICIO NOVA PESSOA CONTRATADA
const geraId = (nome) => {
  const partUmEmail = nome.toLowerCase().replace(' ', '_');
  const partDoisEmail = '@trybe.com';
  const email = `${partUmEmail}${partDoisEmail}`;
  return { nome, email: email };
}

const newEmployees = (geraId) => {
  const employees = {
    id1: geraId('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: geraId('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: geraId('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(geraId));

//SORTEADOR DE LOTERIA
const geraNum = () => {
  const num = Math.random()*5
  return Math.round(num);
}
 const verificaSorteio = (num, callback) => {
  const escolhido = num;
  const sorteado = callback();
  console.log(escolhido);
  console.log(sorteado);
  if (escolhido === sorteado) {
    return 'Parabéns, você ganhou'
  }
  return 'Tente Novamente'
}

console.log(verificaSorteio(2,geraNum));

//CORRETOR AUTOMATICO DE EXAME
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificaResposta = (solucao, respostas) => {
  if (solucao === respostas) {
    return 1;
  } if (respostas === 'N.A') {
    return 0;
  }
  return -0.5;
}

const correcao = (solucao, respostas, callback) => {
  let cont = 0;
  for (let i = 0; i < solucao.length; i += 1) {
    const somatorio = callback(solucao[i], respostas[i]);
    cont += somatorio
  }
  return `Resultado final: ${cont} pontos`;
}
console.log(correcao(RIGHT_ANSWERS, STUDENT_ANSWERS, verificaResposta));