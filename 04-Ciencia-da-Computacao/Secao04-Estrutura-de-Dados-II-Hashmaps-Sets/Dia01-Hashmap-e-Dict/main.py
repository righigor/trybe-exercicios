from exe1 import count
from exe2 import screening
from exe3 import intersection

## Exercicio 1
nums = [3, 2, 5, 4, 1, 2, 3, 4, 4, 4, 1]
print(count(nums))

## Exercicio 2
text = ['Ana', 'ama', 'Joao', 'que', 'ama', 'Jose', 'mas', 'Jose', 'não', 'ama', 'Ana']
print(screening(text))
for key, value in screening(text).items():
  print(f'{key}: {value}')

## Exercicio 3
listA = [1, 2, 3, 4, 5, 6]
listB = [4, 5, 6, 7, 8, 9]
print(intersection(listA, listB))