import './style.css';
import Swal from 'sweetalert2';
// Swal.fire


const btnPesquisar = document.querySelector('#btn-pesquisar');
const tituloMoeda = document.querySelector('#valores');
const secaoMoedas = document.querySelector('#gridMoedas');
const base = 'EUR'
const request = new XMLHttpRequest();

btnPesquisar.addEventListener('click', (e) => {
  e.preventDefault();
  const inputMoeda = document.querySelector('#digita-moeda');
  const inputValue = inputMoeda.value.toUpperCase();
  const api = `https://api.exchangerate.host/latest?base=${inputValue}`;
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates;
      tituloMoeda.innerHTML =`Valores referentes a 1 ${inputValue}`
      Object.keys(rate).forEach(key => {
        const criaDiv = document.createElement('div');
        criaDiv.className = 'moedasConvertidas';
        secaoMoedas.appendChild(criaDiv);
        const valor = rate[key].toFixed(3);
        criaDiv.innerHTML = `<span class = 'coin'><img src="img/icon.png" alt="Icone de uma moeda" class="moedinha">${key}</span> <span class = 'valor'>${valor}</span>`;
      })
    })
    .catch((err) => Swal.fire({
      title: 'Ops ...',
      icon: 'error',
      text: 'Você precisa passar uma moeda',
      confirmButtonText: 'OK',
    }));
});


