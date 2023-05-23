import './select-pet.css';

const buttonDog = document.querySelector('#btnDog');
const buttonCat = document.querySelector('#btnCat');
const buttonRandom = document.querySelector('#btnRandom');
const image = document.querySelector('#img');

const apiDog = 'https://dog.ceo/api/breeds/image/random';
const apiCat = 'https://api.thecatapi.com/v1/images/search';

buttonDog.addEventListener('click', () => {
  fetch(apiDog)
    .then((res) => res.json())
    .then((data) => {
      const dogUrl = data.message;
      image.src = dogUrl;
    })
})

buttonCat.addEventListener('click', () => {
  fetch(apiCat)
    .then((res) => res.json())
    .then((data) => {
      const catUrl = data[0].url;
      image.src = catUrl;
    })
});

buttonRandom.addEventListener('click', () => {
  Promise.any([
    fetch(apiDog),
    fetch(apiCat),
  ])
    .then((res) => res.json())
    .then((data) => {
      const petUrl = data[0].url || data.message;
      image.src = petUrl;
    })
})
