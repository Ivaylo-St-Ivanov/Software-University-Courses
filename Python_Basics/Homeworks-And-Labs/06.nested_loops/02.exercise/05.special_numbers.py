num = int(input())

print_line = ""
is_special = False

for i in range(1111, 9999 + 1):
    current_num = str(i)
    for j in range(len(current_num)):
        current_digit = int(current_num[j])
        if current_digit == 0:
            is_special = False
            break
        elif num % current_digit == 0:
            is_special = True
        else:
            is_special = False
            break
            
    if is_special:
        print_line += str(current_num) + " "
        
print(print_line)
