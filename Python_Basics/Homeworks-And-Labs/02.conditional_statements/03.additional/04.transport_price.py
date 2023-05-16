startPriceTaxi = 0.70
dailyRateTaxiPerKm = 0.79
nightRateTaxiPerKm = 0.90
busRatePerKm = 0.09
trainRatePerKm = 0.06

nKm = int(input())
dayOrNight = input()

price = 0

if nKm >= 100:
    price = trainRatePerKm * nKm
elif nKm >= 20:
    price = busRatePerKm * nKm
elif nKm < 20 and dayOrNight == "day":
    price = startPriceTaxi + dailyRateTaxiPerKm * nKm
else:
    price = startPriceTaxi + nightRateTaxiPerKm * nKm

print(f'{price:.2f}')
