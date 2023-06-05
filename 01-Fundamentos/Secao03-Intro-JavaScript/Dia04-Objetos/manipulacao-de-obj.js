//EXERCICIO 1
const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};
const text = `O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[0].title}.`;
console.log(text);

const newBook = {
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
};
const bookList = reader.favoriteBooks;
bookList.push(newBook);

const text1 = `${reader.name} tem ${bookList.length} livros favoritos.`;
console.log(text1);

//EXERCICIO 2
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (fullOrder) => {
  const name = fullOrder.name;
  const deliveryPerson = fullOrder.order.delivery.deliveryPerson;
  const tel = fullOrder.phoneNumber;
  const street = fullOrder.address.street;
  const streetNumber = fullOrder.address.number;
  const streetAp = fullOrder.address.apartment;
  return `Olá, ${deliveryPerson}, entrega para: ${name}, Telefone: ${tel}, ${street}, Número: ${streetNumber}, AP: ${streetAp}.`
};

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
  fullOrder.name = 'Luiz Silva';
  fullOrder.payment.total = 50;
  const pedido1 = Object.keys(fullOrder.order.pizza);
  const pedido2 = fullOrder.order.drinks.coke.type;
  return `Olá ${fullOrder.name}, o valor total de seu pedido de ${pedido1[0]}, ${pedido1[1]} e ${pedido2} é R$ ${fullOrder.payment.total},00.`
}

console.log(orderModifier(order));

//EXERCICIO 3
const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};

const achaCurso = (obj, i) => {
  return obj.lessons[i];
}
const somaAlunos = (obj) => {
  let total = 0;
  obj.lessons.forEach(curso => {
    const alunos = curso.students;
    total += alunos
  });
  return total;
}
const verificaChave = (obj, key) => {
  for (let index = 0; index < obj.lessons.length; index += 1) {
    if (obj.lessons[index][key] === undefined) {
      return false;
    }
  }
  return true;
}

const alteraDados = (obj, curso, novo) => {
  for ( let i = 0; i < obj.length; i += 1 ) {
    if (obj.lessons[i].course === curso) {
      obj.lessons[i].shift = novo;
    } 
  }
}

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const result = {};
for (let i = 0; i < basket.length; i += 1) {
  let fruit = basket[i];
  if (!result[fruit]) {
    result[fruit] = 1;
  } else {
    result[fruit] += 1;
  }
}
const entradas = Object.entries(result);
let novoArray = [];

for ( let i = 0; i < entradas.length; i += 1 ) {
  if (entradas[i][1] > 1) {
    novoArray.push(`${entradas[i][1]} ${entradas[i][0]}s`);
  } else {
    novoArray.push(`${entradas[i][1]} ${entradas[i][0]}`);
  }
}
console.log(novoArray);
