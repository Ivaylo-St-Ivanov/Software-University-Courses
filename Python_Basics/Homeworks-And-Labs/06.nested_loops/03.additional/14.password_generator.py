n = int(input())
l = int(input())

print_line = ''

for a in range(1, n + 1):
    for b in range(1, n + 1):
        for c in range(97, 97 + l):
            for d in range(97, 97 + l):
                for e in range(2, n + 1):
                    if e > a and e > b:
                        print_line += f'{a}{b}{str(chr(c))}{str(chr(d))}{e} '

print(print_line)
