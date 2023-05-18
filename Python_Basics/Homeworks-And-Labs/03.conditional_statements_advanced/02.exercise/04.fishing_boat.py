springPrice = 3000
summerPrice = 4200
autumnPrice = 4200
winterPrice = 2600

budget = int(input())
season = input()
fishermen = int(input())

finalPrice = 0

if season == 'Spring':
    finalPrice = springPrice
elif season == 'Summer':
    finalPrice = summerPrice
elif season == 'Autumn':
    finalPrice = autumnPrice
elif season == 'Winter':
    finalPrice = winterPrice

if fishermen <= 6:
    finalPrice *= 0.90
elif fishermen > 6 and fishermen <= 11:
    finalPrice *= 0.85
elif fishermen > 11:
    finalPrice *= 0.75

if fishermen % 2 == 0 and season != "Autumn":
    finalPrice *= 0.95

difference = f'{abs(budget - finalPrice):.2f}'

if budget >= finalPrice:
    print(f'Yes! You have {difference} leva left.')
else:
    print(f'Not enough money! You need {difference} leva.')
