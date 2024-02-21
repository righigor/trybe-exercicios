names = []

names.append('igor')
names.append('righi')
names.append('goncalves')

print(len(names))
print(names[1])

print(names)

names.pop()
print(names)

names.append('goncalves')

for name in names:
    print(name)

num = [1,2,3,4,5]

doubleNum = []

for numero in num:
    doubleNum.append(numero*2)

print(doubleNum)

tripleNum = [numero * 3 for numero in num]

print(tripleNum)