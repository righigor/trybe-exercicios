class Employee:
  def __init__(self, id_num, name):
    self.id_num = id_num
    self.name = name

class HashMap:
  def __init__(self):
    self._buckets = [[] for i in range(10)]

  def get_adress(self, key):
    return key % 10
  
  def insert(self, employee):
    address = self.get_adress(employee.id_num)
    self._buckets[address].append(employee)

  def get_value(self, id_num):
    address = self.get_adress(id_num)
    for employee in self._buckets[address]:
      if employee.id_num == id_num:
        return employee.name
    return None
  
  def has(self, id_num):
    address = self.get_adress(id_num)
    return self._buckets[address] is not None
  
  def update(self, id_num, new_name):
    address = self.get_adress(id_num)
    self._buckets[address].name = new_name
  

if __name__ == "__main__":
  
  employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
  registry = HashMap()

  for id_num, name in employees:
    employee = Employee(id_num, name)
    registry.insert(employee)
  
  print(registry.get_value(14).name)
  registry.update(14, "IGOR RIGHI")
  print(registry.get_value(14).name)