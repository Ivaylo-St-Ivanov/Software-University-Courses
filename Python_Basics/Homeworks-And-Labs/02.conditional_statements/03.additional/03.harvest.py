from math import ceil, floor

grapesPerLiter = 2.5

xArea = int(input())
yGrapes = float(input())
zNeededLiters = int(input())
workmen = int(input())

totalGrapes = xArea * yGrapes
producedWine = totalGrapes / grapesPerLiter * 0.4
difference = abs(producedWine - zNeededLiters)

if producedWine < zNeededLiters:
    print(f'It will be a tough winter! More {floor(difference)} liters wine needed.')
else:
    extraWine = difference / workmen
    print(f'Good harvest this year! Total wine: {floor(producedWine)} liters.')
    print(f'{ceil(difference)} liters left -> {ceil(extraWine)} liters per person.')
