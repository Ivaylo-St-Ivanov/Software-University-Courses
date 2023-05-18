budget = float(input())
season = input()

destination = 0
place = 0
sum = 0

if budget <= 100:
    destination = "Bulgaria"
    if season == 'summer':
        sum = budget * 0.30
        place = "Camp"
    elif season == 'winter':
        sum = budget * 0.70
        place = "Hotel"
elif budget <= 1000:
    destination = "Balkans"
    if season == 'summer':
        sum = budget * 0.40
        place = "Camp"
    elif season == 'winter':
        sum = budget * 0.80
        place = "Hotel"
elif budget > 1000:
    destination = "Europe"
    sum = budget * 0.90
    place = "Hotel"

print(f'Somewhere in {destination}')
print(f'{place} - {sum:.2f}')
