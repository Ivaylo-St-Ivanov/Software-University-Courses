from math import ceil, floor

magnoliasPrice = 3.25
hyacinthsPrice = 4.00
rosesPrice = 3.50
cactusPrice = 8.00

magnoliasCount = int(input())
hyacinthsCount = int(input())
rosesCount = int(input())
cactusCount = int(input())
giftPrice = float(input())

orderPrice = magnoliasCount * magnoliasPrice + hyacinthsCount * hyacinthsPrice + rosesCount * rosesPrice + cactusCount * cactusPrice
    #  От общата сума, Мария трябва да плати 5% данъци.
profit = orderPrice * 0.95
difference = abs(profit - giftPrice)

if profit >= giftPrice:
    print(f'She is left with {floor(difference)} leva.')
else:
    print(f'She will have to borrow {ceil(difference)} leva.')
