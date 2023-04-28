// techList.js
const techList = (array, name) => {
  if (array.length === 0) return 'Vazio!';

  const arraySorteado = array.sort();
  const lista = [];

  for (let i = 0; index < arraySorteado.length; i += 1) {
    lista.push({
      tech: arraySorteado[i],
      name,
    });
  }

  return lista;
};

module.exports = techList;