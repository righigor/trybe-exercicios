//EXERCICIO 1
let saldoBanco = 1000;
function aumentarSaldo (saldo) {
  return saldoBanco + saldo;
}
function diminuirSaldo (saldo) {
  return saldoBanco - saldo;
}
function multiplicarSaldo (saldo) {
  return saldoBanco * saldo;
}
function dividirSaldo (saldo) {
  return saldoBanco / saldo;
}

console.log(saldoBanco);
console.log(aumentarSaldo(100));
console.log(diminuirSaldo(100));
console.log(multiplicarSaldo(100));
console.log(dividirSaldo(100));

