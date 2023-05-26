num = int(input())
sum = 0

for i in range(num):
    current_num = int(input())
    sum += current_num

averageNum = sum / num
print(f'{averageNum:.2f}')