num = int(input())

current_num = 1
print_current_line = ""
is_bigger = False

for i in range(1, num + 1):
    for j in range(1, i + 1):
        if current_num > num:
            is_bigger = True
            break
    
        print_current_line += str(current_num) + " "
        current_num += 1
        
    print(print_current_line)
    print_current_line = ""

    if is_bigger == True:
        break
