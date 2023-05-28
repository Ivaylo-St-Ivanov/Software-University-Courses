a = int(input())
b = int(input())
capacity = int(input())

print_line = ''
pass_counter = 0
is_break = False

for i in range(35, 56):
    for j in range(64, 97):
        for x in range(1, a + 1):
            for y in range(1, b + 1):
                print_line += f'{str(chr(i))}{str(chr(j))}{x}{y}{str(chr(j))}{str(chr(i))}|'
                pass_counter += 1
                i += 1
                j += 1
                if pass_counter == capacity:
                    break         
                if i > 55:
                    i = 35
                if j > 96:
                    j = 64
            if pass_counter == capacity:
                break
            if x == a:
                is_break = True
                break 
        if pass_counter == capacity:
            break
        if is_break:
            break
    if pass_counter == capacity:
        break
    if is_break:
        break

print(print_line)
