count_0f_nums = int(input())

left_sum = 0
right_sum = 0

for i in range(count_0f_nums * 2):
    current_num = int(input())
    if i < count_0f_nums:
        left_sum += current_num
    else:
        right_sum += current_num

if left_sum == right_sum:
    print(f'Yes, sum = {right_sum}')
else:
    diff = abs(left_sum - right_sum)
    print(f'No, diff = {diff}')