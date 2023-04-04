function subistituaX (nome) {
  const frase = ('Tryber X aqui!');
  let result = frase.replace('X', nome);
  return result;
};
const minhasSkills = (funcao) => {
  const skills = ['html', 'css', 'js'];
  let final = `${funcao} 
  Minhas três principais habilidades são:`;
  for (let i = 0; i < skills.length; i += 1) {
    final = `${final}
    -${skills[i]}`
  }
  return final;
};

console.log(minhasSkills(subistituaX('igor')));