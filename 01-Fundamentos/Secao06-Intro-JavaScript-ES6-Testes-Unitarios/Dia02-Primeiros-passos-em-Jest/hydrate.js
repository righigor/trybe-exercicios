const hydrate = (string) => {
  const fraseSplit = string.split('')
  let copoDeAgua = 0;
  for (let i = 0; i < fraseSplit.length; i += 1) {
    const seENum = parseInt(fraseSplit[i])
    if (seENum) {
      copoDeAgua += seENum;
    }
  }
  let copo = 'copo';
  if (copoDeAgua > 1) {
    copo = 'copos';
  }
  return `${copoDeAgua} ${copo} de água`;
}

module.exports = hydrate;