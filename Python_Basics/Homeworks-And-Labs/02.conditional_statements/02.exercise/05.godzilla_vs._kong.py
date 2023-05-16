budget = float(input())
numberOfSupernumerary = int(input())
clothingPriceForOne = float(input())

decor = budget * 0.1
clothingPrice = numberOfSupernumerary * clothingPriceForOne

if numberOfSupernumerary > 150:
    clothingPrice = clothingPrice - clothingPrice * 0.1

costs = decor + clothingPrice
difference = abs(budget - costs)

if costs > budget:
    print("Not enough money!")
    print(f'Wingard needs {difference:.2f} leva more.')
else:
    print("Action!")
    print(f'Wingard starts filming with {difference:.2f} leva left.')