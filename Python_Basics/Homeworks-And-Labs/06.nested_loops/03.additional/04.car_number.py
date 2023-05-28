start = int(input())
end = int(input())
print_line = ''

for i in range(start, end + 1):
    for j in range(start, end + 1):
        for k in range(start, end + 1):
            for l in range(start, end + 1):
                if i > l and (j + k) % 2 == 0 and ((i % 2 == 0 and l % 2 != 0) or (i % 2 != 0 and l % 2 == 0)):
                    print_line += f'{i}{j}{k}{l} '

print(print_line)
