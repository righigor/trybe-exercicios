function CaculaIdade (nascimento: string): number {
  const [dia, mes, ano] = nascimento.split('/');
  const dataAniversario = new Date(+ano, +mes - 1, +dia);
  const hoje = new Date();
  let idade = hoje.getFullYear() - dataAniversario.getFullYear();
  const m = hoje.getMonth() - dataAniversario.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < dataAniversario.getDate())) {
    idade -= 1;
  }
  return idade;
}

export default CaculaIdade