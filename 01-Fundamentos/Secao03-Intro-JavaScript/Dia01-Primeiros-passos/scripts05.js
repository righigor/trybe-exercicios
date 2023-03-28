let situacao;

situacao = 'aprovada';
switch (situacao) {
  case 'aprovada':
    console.log('Parabéns, você está no grupo de pessoas aprovadas');
    break;

  case 'lista':
    console.log('Você está na nossa de lista de espera');
    break;
  
  case'reprovado':
    console.log('Infelizmente você reprovou');
    break;

  default:
    console.log ('Informação incorreta')
}