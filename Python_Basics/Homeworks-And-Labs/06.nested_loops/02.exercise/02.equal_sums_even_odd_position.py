first_num = int(input())
second_num = int(input())

print_line = ""

for i in range(first_num, second_num + 1):
    current_num = str(i)
    even_sum = 0
    odd_sum = 0
    for j in range(len(current_num)):
        current_digit = int(current_num[j])
        if j % 2 == 0:
            even_sum += current_digit
        else:
            odd_sum += current_digit
            
    if even_sum == odd_sum:
        print_line += str(current_num) + " "
        
print(print_line)
