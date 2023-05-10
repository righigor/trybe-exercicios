const sum = (...numbers) => {
  let total = 0;
  numbers.forEach(element => {
    total += element;
  });
  return total;
}

console.log(sum(4,5,6,7,8,9,10))