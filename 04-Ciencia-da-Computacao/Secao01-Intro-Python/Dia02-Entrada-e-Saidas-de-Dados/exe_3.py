bombados = []

with open('notas_alunos.txt') as notas:
  for aluno in notas:
    nota_do_aluno = aluno
    nota_do_aluno = nota_do_aluno.split(" ")
    if int(nota_do_aluno[1]) < 6:
      bombados.append(nota_do_aluno[0] + '\n')

with open('bombados.txt', mode='w') as alunos_bombados:
  print(bombados)
  alunos_bombados.writelines(bombados)
