codigo = {
'A': '.-', 'B': '-...', 'C': '-.-.',
'D': '-..', 'E': '.', 'F': '..-.',
'G': '--.', 'H': '....', 'I': '..',
'J': '.---', 'K': '-.-', 'L': '.-..',
'M': '--', 'N': '-.', 'O': '---',
'P': '.--.', 'Q': '--.-', 'R': '.-.',
'S': '...', 'T': '-', 'U': '..-',
'V': '...-', 'W': '.--', 'X': '-..-',
'Y': '-.--', 'Z': '--..', '1': '.----',
'2': '..---', '3': '...--', '4': '....-',
'5': '.....', '6': '-....', '7': '--...',
'8': '---..', '9': '----.', '0': '-----',
'.': '.-.-.-', ',': '--..--', ':': '---...',
';': '-.-.-.', '?': '..--..', '!': '-.-.--',
'"': '.-..-.', "'": '.----.', '+': '.-.-.','-': '-....-', '/': '-..-.', '=': '-...-',
'_': '..--.-', '$': '...-..-', '@': '.--.-.',
'&': '.-...', '(': '-.--.', ')': '-.--.-'
}

cadenasepar = ".- - .... --. --- ---...".split()
cadenanew = ""

for x in cadenasepar:
    cadenanew += codigo[x]

print(cadenanew)
