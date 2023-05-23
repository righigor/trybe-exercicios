import './style.css';
import Swal from 'sweetalert2';
// Swal.fire

const api = 'https://api.exchangerate.host/latest?base=${moeda}';

const btnPesquisar = document.querySelector('#btn-pesquisar');
const tituloMoeda = document.querySelector('#valores');
const secaoMoedas = document.querySelector('#gridMoedas');
const base = 'EUR'
const request = new XMLHttpRequest();

btnPesquisar.addEventListener('click', (e) => {
  e.preventDefault();
  const inputMoeda = document.querySelector('#digita-moeda');
  const inputValue = inputMoeda.value.toUpperCase();
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const rate = data.rates;
      tituloMoeda.innerHTML =`Valores referentes a 1 ${inputValue}`
      Object.keys(rate).forEach(key => {
        const criaDiv = document.createElement('div');
        criaDiv.className = 'moedasConvertidas';
        criaSpan.className = 'img-icon';
        secaoMoedas.appendChild(criaDiv);
        criaDiv.innerHTML = `${key} ${rate[key]}`;
      })
    })
    .catch((err) => Swal.fire({
      title: 'Ops ...',
      icon: 'error',
      text: 'Você precisa passar uma moeda',
      confirmButtonText: 'OK',
    }));
});


