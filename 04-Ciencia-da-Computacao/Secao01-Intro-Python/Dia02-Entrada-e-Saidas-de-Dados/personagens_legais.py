characters_file = open("meus-personagens.txt", mode='w')

characters_file.write('tio patinhas\n')
characters_file.write('homem de ferro\n')
characters_file.write('homem aranha\n')

print('batman\n', file=characters_file)

more_characters = ['ash\n', 'brock\n']

characters_file.writelines(more_characters)

characters_file.close()