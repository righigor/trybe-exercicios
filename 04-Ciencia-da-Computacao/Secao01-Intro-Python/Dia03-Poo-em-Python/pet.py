class Pet():
  def __init__(self, nome, especie, idade, humano):
    self.nome = nome
    self.especie = especie
    self.idade = idade
    self.humano = humano

  def __str__(self) -> str:
    return f"""
    - Especie: {self.especie}
    - Nome: {self.nome}
    - Idade: {self.idade}
    - Dono: {self.humano}
    """
  
  def __repr__(self) -> str:
    return f'Pet({self.nome}, {self.especie}, {self.idade}, {self.humano})'

thor = Pet('thor', 'gato', 5, 'felps')

print(thor)