premierePrice = 12.00
normalPrice = 7.50
discountPrice = 5.00

projection = input()
rowCount = int(input())
columnCount = int(input())

seatCount = rowCount * columnCount
income = 0

if projection == 'Premiere':
    income = premierePrice
elif projection == 'Normal':
    income = normalPrice
elif projection == 'Discount':
    income = discountPrice

income *= seatCount 

print(f'{income:.2f} leva')