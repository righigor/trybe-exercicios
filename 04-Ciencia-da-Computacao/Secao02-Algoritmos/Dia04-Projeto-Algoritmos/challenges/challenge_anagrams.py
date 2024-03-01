def merged(word, start=0, end=None):
    if end is None:
        end = len(word)
    if end - start > 1:
        middle = (start + end) // 2
        merged(word, start, middle)
        merged(word, middle, end)
        merge(word, start, middle, end)
    return word


def merge(word, start, middle, end):
    left = word[start:middle]
    right = word[middle:end]
    left_index = 0
    right_index = 0
    for i in range(start, end):
        if left_index < len(left) and (right_index >= len(right) or (
            left[left_index] <= right[right_index])
        ):
            word[i] = left[left_index]
            left_index += 1
        else:
            word[i] = right[right_index]
            right_index += 1


def is_anagram(first_string, second_string):
    first_string_o = "".join(merged(list(first_string.lower())))
    second_string_o = "".join(merged(list(second_string.lower())))

    if first_string == '' or second_string == '':
        return (first_string_o, second_string_o, False)
    elif first_string_o == second_string_o:
        return (first_string_o, second_string_o, True)
    else:
        return (first_string_o, second_string_o, False)
