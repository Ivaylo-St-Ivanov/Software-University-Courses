current = input()

sum_of_all_prime = 0
sum_of_all_non_prime = 0

while current != "stop":
    current_num = int(current)
    if current_num < 0:
        print("Number is negative.")
    else:
        is_prime = True
        for i in range(2, current_num):
            if current_num % i == 0:
                is_prime = False
                break
                
        if is_prime:
            sum_of_all_prime += current_num
        else:
            sum_of_all_non_prime += current_num
            
    current = input()
    
print(f'Sum of all prime numbers is: {sum_of_all_prime}')
print(f'Sum of all non prime numbers is: {sum_of_all_non_prime}')
