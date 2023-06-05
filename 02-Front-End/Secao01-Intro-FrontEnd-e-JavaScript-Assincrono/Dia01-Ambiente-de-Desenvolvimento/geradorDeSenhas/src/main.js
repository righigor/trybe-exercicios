import { nanoid } from "nanoid";
import './style.css';
import copy from 'clipboard-copy'

const senhaBotao = document.querySelector('#senha');
const limparBotao = document.querySelector('#limpar');
const displaySenha = document.querySelector('h2');
const copiarBotao = document.querySelector('#copiar');

senhaBotao.addEventListener('click', () => {
  displaySenha.innerHTML = nanoid();
});

limparBotao.addEventListener('click', () => {
  displaySenha.innerHTML = '...';
});

copiarBotao.addEventListener('click', function () {
  copy(displaySenha.innerText)
});
