num = float(input())

result = 0

while True:
    if num < 0:
        print("Negative number!")
        break

    result = num * 2
    print(f'Result: {result:.2f}')
    num = float(input())
