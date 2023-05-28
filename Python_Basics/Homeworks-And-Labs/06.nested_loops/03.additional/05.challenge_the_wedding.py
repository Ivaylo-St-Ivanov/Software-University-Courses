mans = int(input())
womans = int(input())
tables = int(input())

print_line = ''
table = 0

for i in range(1, mans + 1):
    for j in range(1, womans + 1):
        table += 1
        if table <= tables:
            print_line += f'({i} <-> {j}) '
            
print(print_line)
