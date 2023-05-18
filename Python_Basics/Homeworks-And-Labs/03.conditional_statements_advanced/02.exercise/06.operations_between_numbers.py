n1 = int(input())
n2 = int(input())
operator = input()

result = 0
evenOdd = 0

if operator == '+':
    result = n1 + n2
    if result % 2 == 0:
        evenOdd = "even"
    else:
        evenOdd = "odd"        
    print(f'{n1} {operator} {n2} = {result} - {evenOdd}')
elif operator == '-':
    result = n1 - n2
    if result % 2 == 0:
        evenOdd = "even"
    else:
        evenOdd = "odd"        
    print(f'{n1} {operator} {n2} = {result} - {evenOdd}')
elif operator == '*':
    result = n1 * n2
    if result % 2 == 0:
        evenOdd = "even"
    else:
        evenOdd = "odd"        
    print(f'{n1} {operator} {n2} = {result} - {evenOdd}')
elif operator == '/':
    if n2 == 0:
        print(f'Cannot divide {n1} by zero')
    else:
        result = n1 / n2
        print(f'{n1} / {n2} = {result:.2f}')
elif operator == '%':
    if n2 == 0:
        print(f'Cannot divide {n1} by zero')
    else:
        result = n1 % n2
        print(f'{n1} % {n2} = {result}')

