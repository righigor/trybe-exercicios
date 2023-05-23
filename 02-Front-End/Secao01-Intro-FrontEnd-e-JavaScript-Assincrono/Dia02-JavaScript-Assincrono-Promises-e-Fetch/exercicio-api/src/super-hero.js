import './super-hero.css';

const img =document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

const token = '5919528198155953';

const api = `https://www.superheroapi.com/api.php/${token}`;

const randomId = () => Math.floor(Math.random() * 1000);

button.addEventListener('click', (e) => {
  const erro = 'Herói não encontrado';
  e.preventDefault();
  const id = randomId();
  fetch(`${api}/${id}`)
  .then((resultado) => resultado.json())
  .then((data) => {
    img.src = data.image.url;
    name.innerHTML = data.name;
  })
  .catch((err) => window.alert(erro));
});