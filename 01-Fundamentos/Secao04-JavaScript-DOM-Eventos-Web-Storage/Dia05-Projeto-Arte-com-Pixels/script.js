//FUNCAO QUE SALVA A PALETA DE CORES
salvarCores = () => {
  const listaCor = [];
  cor = document.querySelectorAll('.color');
  for (let i = 0; i < 4; i += 1) {
    color = cor[i].style.backgroundColor
    listaCor.push(color);
  }
  localStorage.setItem('colorPalette', JSON.stringify(listaCor));
};

//FUNCAO QUE SALVA OS PIXELS PINTADOS
salvarPixel = () => {
  const listaPixel = [];
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < 25; i += 1) {
    pixelColor = pixel[i].style.backgroundColor;
    listaPixel.push(pixelColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(listaPixel));
};

//FUNCAO QUE CRIA ESTRUTURA DA PALETA DE CORES
addPaleta = () => {
  const paleta = document.getElementById('color-palette');
  for (i = 0; i < 4; i += 1) {
    const corPaleta = document.createElement('div');
    corPaleta.className = 'color';
    paleta.appendChild(corPaleta);
  }
}
addPaleta();

//FUNÇÃO QUE GERA CORES ALEATORIAS
gerarCorAleatoria = () => {
  const termos = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
      color += termos[Math.floor(Math.random() * termos.length)]
    }
    return color;
}

//FUNCAO QUE ADICIONA COR A PALETA
addCorPaleta = () => {
  corPaleta = document.querySelectorAll('.color')
  for (i = 0; i < corPaleta.length; i += 1) {
    if (i === 0) {
      corPaleta[i].style.backgroundColor = 'black';
    } else {
      corPaleta[i].style.backgroundColor = gerarCorAleatoria()
    }
  }
  salvarCores();
}

//FUNCAO QUE SELECIONA PRIMEIRA COR SEMPRE
selecionarPrimeiraCor = () => {
  const cores = document.querySelectorAll('.color');
  cores[0].classList.add('selected');
}
selecionarPrimeiraCor();
//FUNCAO QUE CRIA ESTRUTURA QUADRO DE PIXELS
corPixels = document.querySelectorAll('.pixel')
board = document.getElementById('pixel-board');
addPixelBoard = () => {
    for (let i = 0; i < 25; i += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'rgb(255, 255, 255)';
      board.appendChild(pixel);
    }
    salvarPixel();
}

addPixelBoard();
//BOTAO QUE GERA NOVAS CORES ALEATORIAS
const randomButton = document.getElementById('button-random-color');
randomButton.addEventListener('click', () => {
  const paleta = document.querySelectorAll('.color')
  for (let i = 0; i < paleta.length; i += 1) {
    if (i === 0){
      paleta[i].style.backgroundColor = 'black'
    } else {
      paleta[i].style.backgroundColor = gerarCorAleatoria();
    }
  }
  salvarCores();
})

//BOTAO QUE LIMPA O PIXEL BOARD
const limparButton = document.getElementById('clear-board');
limparButton.addEventListener('click', () => {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i++) {
    pixel[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
  salvarPixel();
});

//FUNCAO QUE SELECIONA UMA COR NA PALETA
const cores = document.querySelectorAll('.color');
for (let i = 0; i < cores.length; i += 1) {
  cores[i].addEventListener('click', () => {
    preSelecionado = document.querySelector('.selected');
    preSelecionado.classList.remove('selected');
    cores[i].classList.add('selected');
  })
}

//FUNCAO QUE PINTA PIXELS
const pixel = document.querySelector('#pixel-board');
let corSelecionada = document.getElementsByClassName('selected');
pixel.addEventListener('click', (event) => {
  event.target.style.backgroundColor = corSelecionada[0].style.backgroundColor
  salvarPixel();
});

//FUNCAO QUE RECUPERA CORES SALVAS DA PALETA
corPaleta = document.querySelectorAll('.color');
recuperarCores = () => {
  const cor = JSON.parse(localStorage.getItem('colorPalette'));
  if (cor !== null) {
  for (i in cor) {
      const divCor = corPaleta[i];
      divCor.style.backgroundColor = cor[i];
    }
  } else {
    addCorPaleta();
  }
}

//FUNCAO QUE RECUPERA PIXELS PINTADOS
corPixels = document.querySelectorAll('.pixel')
recuperarPixel = () => {
  const pixel = JSON.parse(localStorage.getItem('pixelBoard'));
  if (pixel !== null) {
    for (i in pixel) {
      const divPixel = corPixels[i];
      divPixel.style.backgroundColor = pixel[i];
    }
  }
}

window.onload = () => {
  recuperarCores();
  recuperarPixel();
}
