start_num = int(input())
end_num = int(input())
magic_num = int(input())

counter_combinations = 0
is_combination = False

for i in range(start_num, end_num + 1):
    for j in range(start_num, end_num + 1):
        counter_combinations += 1
        if i + j == magic_num:
            print(f'Combination N:{counter_combinations} ({i} + {j} = {magic_num})')
            is_combination = True
            break
            
    if is_combination == True:
        break
        
if not is_combination:
    print(f'{counter_combinations} combinations - neither equals {magic_num}')
