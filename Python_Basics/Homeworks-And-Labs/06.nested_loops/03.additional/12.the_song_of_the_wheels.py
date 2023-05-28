control_value = int(input())

combinations = ''
counter = 0
password = ''

for a in range(1, 10):
    for b in range(1, 10):
        for c in range(1, 10):
            for d in range(1, 10):
                if a < b and c > d and a * b + c * d == control_value:
                    combinations += f'{a}{b}{c}{d} '
                    counter += 1
                    if counter == 4:
                        password += f'{a}{b}{c}{d}'

if len(combinations) > 0:
    print(combinations)
if len(password) > 0:
    print(f'Password: {password}')
else:
    print('No!')
