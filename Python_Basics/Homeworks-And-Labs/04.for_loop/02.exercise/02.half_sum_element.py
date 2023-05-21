from sys import maxsize

count_of_nums = int(input())

sum = 0
num = -maxsize

for i in range(count_of_nums):
    current_num = int(input())
    if current_num > num:
        num = current_num
    sum += current_num

sum = sum - num
if num == sum:
    print('Yes' + '\n' + f'Sum = {sum}')
else:
    diff = abs(num - (sum))
    print('No' + '\n' + f'Diff = {diff}')
