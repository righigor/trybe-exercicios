//EXERCICIO 1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
let menuPortifolio = menu.indexOf('Portfólio');
menu.push('Contato')

console.log(menuServices);
console.log(menuPortifolio);
console.log(menu);

//EXERCICIO 2
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i += 1) {
  console.log(groceryList[i]);
}

//EXERCICIO 3
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nome of names) {
  console.log(nome);
}