couple_count = int(input())

current_couple_value = 0
last_couple_value = 0
current_difference = 0
max_difference = 0
is_have_difference = False
index = 1

for i in range(couple_count):
    current_num_one = int(input())
    current_num_two = int(input())
    index += 2
    current_couple_value = current_num_one + current_num_two
    if index <= 3:
        last_couple_value = current_couple_value
    elif current_couple_value != last_couple_value:
        is_have_difference = True
        current_difference = abs(current_couple_value - last_couple_value)
        last_couple_value = current_couple_value
        if current_difference > max_difference:
            max_difference = current_difference
    else:
        last_couple_value = current_couple_value
    
if is_have_difference:
    print(f'No, maxdiff={max_difference}')
else:
    print(f'Yes, value={last_couple_value}')
