texto = "a turma 33 está ficando fera em python"

def anlayze(text: str) -> str:
    report = ""
    report += f"o numero de palavras do texto é {count_words(text)}\n"
    char_count = dict()
    for char in text.lower():
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
    report += f"cada caracter aparece no texto esse numero de vezes: {char_count}"
    return report

def count_words(text: str) -> int:
    return len(text.split(" "))

print(anlayze(texto))