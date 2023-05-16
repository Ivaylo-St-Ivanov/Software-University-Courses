gasolinePrice = 2.22
dieselPrice = 2.33
gasPrice = 0.93
discountGasolinePerLiter = 0.18
discountDieselPerLiter = 0.12
discountGasPerLiter = 0.08

fuel = input()
liters = int(input())
discountCard = input()

price = 0

if discountCard == "Yes":
    if fuel == 'Gas':
        price = liters * gasPrice - liters * discountGasPerLiter
    elif fuel == 'Gasoline':
        price = liters * gasolinePrice - liters * discountGasolinePerLiter
    elif fuel == 'Diesel':
        price = liters * dieselPrice - liters * discountDieselPerLiter
else:
    if fuel == 'Gas':
        price = liters * gasPrice
    elif fuel == 'Gasoline':
        price = liters * gasolinePrice
    elif fuel == 'Diesel':
        price = liters * dieselPrice

    #  Ако шофьора е заредил между 20 и 25 литра включително, той получава 8 процента отстъпка от крайната цена,
    #  при повече от 25 литра гориво, той получава 10 процента отстъпка от крайната цена.
if liters >= 20 and liters <= 25:
    price *= 0.92
elif liters > 25:
    price *= 0.9

print(f'{price:.2f} lv.')
