from math import ceil, floor

days = int(input())
foodInKg = float(input())
dogFoodPerDayInKg = float(input())
catFoodPerDayInKg = float(input())
turtleFoodPerDayInGr = float(input())

turtleFoodPerDayInKg = turtleFoodPerDayInGr / 1000
neededFood = days * (dogFoodPerDayInKg + catFoodPerDayInKg + turtleFoodPerDayInKg)
difference = abs(foodInKg - neededFood)

if foodInKg >= neededFood:
    print(f'{floor(difference)} kilos of food left.')
else:
    print(f'{ceil(difference)} more kilos of food are needed.')
