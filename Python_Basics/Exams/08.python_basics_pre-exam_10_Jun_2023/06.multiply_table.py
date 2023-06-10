input = input()

first_num = int(input[2])
second_num = int(input[1])
third_num = int(input[0])

for first in range(1, first_num + 1):
    for second in range(1, second_num + 1):
        for third in range(1, third_num + 1):
            result = first * second * third
            print(f'{first} * {second} * {third} = {result};')
