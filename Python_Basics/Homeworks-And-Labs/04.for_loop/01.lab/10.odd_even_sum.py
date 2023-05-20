count_of_nums = int(input())

sum_of_even = 0
sum_of_odd = 0

for i in range(count_of_nums):
    current_num = int(input())
    if i % 2 == 0:
        sum_of_even += current_num
    else:
        sum_of_odd += current_num

if sum_of_even == sum_of_odd:
    print('Yes' + '\n' + f'Sum = {sum_of_even}')
else:
    diff = abs(sum_of_even - sum_of_odd)
    print('No' + '\n' + f'Diff = {diff}')