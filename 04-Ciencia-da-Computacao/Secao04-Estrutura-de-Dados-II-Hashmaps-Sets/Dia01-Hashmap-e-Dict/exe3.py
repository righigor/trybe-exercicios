# def intersection(list1, list2):
#     return list(set(list1) & set(list2))

def intersection(list1, list2):
  seen_in_a = {}

  for item in list1:
    if item not in seen_in_a:
      seen_in_a[item] = True

  result = []
  for item in list2:
    if item in seen_in_a:
      result.append(item)

  return result