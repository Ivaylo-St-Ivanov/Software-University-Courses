element = input()

total = 0

while element != "NoMoreMoney":
    element = float(element)
    if element < 0:
        print("Invalid operation!")
        break

    print(f'Increase: {element:.2f}')
    total += element
    element = input()

print(f'Total: {total:.2f}')