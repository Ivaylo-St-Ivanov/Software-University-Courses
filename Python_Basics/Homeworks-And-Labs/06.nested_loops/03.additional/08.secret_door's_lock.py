first_num_upper_limit = int(input())
second_num_upper_limit = int(input())
third_num_upper_limit = int(input())

for i in range(2, first_num_upper_limit + 1, 2):
    for j in range(2, second_num_upper_limit + 1):
        for k in range(2, third_num_upper_limit + 1, 2):
            if j == 2 or j == 3 or j == 5 or j == 7:
                print(f'{i} {j} {k}')
