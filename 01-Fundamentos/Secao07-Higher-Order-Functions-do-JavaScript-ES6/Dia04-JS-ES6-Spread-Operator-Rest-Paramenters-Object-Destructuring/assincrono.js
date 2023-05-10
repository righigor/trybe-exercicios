//SPREAD OPERATOR
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['limão', 'maracuja', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['açucar', 'mel', 'agua'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return lista = [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

//OBJECT DESTRUCTURING

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const trappistEnterprise = {
  ...user,
  ...jobInfos,
}

const {name, age, nationality, profession, squad, squadInitials} = trappistEnterprise

const frase = `Olá, meu nome é ${name}, tenho ${age} anos de idade e sou ${nationality}. Trabalho como ${profession} e meu squad é o ${squad}.`
console.log(frase);