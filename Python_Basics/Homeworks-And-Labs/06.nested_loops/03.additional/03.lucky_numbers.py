num = int(input())
print_line = ''

for i in range(1, 10):
    for j in range(1, 10):
        for k in range(1, 10):
            for l in range(1, 10):
                if (i + j == k + l) and num % (i + j) == 0:
                    print_line += f'{i}{j}{k}{l} '

print(print_line)