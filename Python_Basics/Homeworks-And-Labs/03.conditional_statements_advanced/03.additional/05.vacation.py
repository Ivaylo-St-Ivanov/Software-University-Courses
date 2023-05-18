budget = float(input())
season = input()

price = 0
location = ""
place = ""

if budget <= 1000:
    place = "Camp"
    if season == 'Summer':
        location = "Alaska"
        price = 0.65 * budget
    elif season == 'Winter':
        location = "Morocco"
        price = 0.45 * budget
elif budget <= 3000:
    place = "Hut"
    if season == 'Summer':
        location = "Alaska"
        price = 0.8 * budget
    elif season == 'Winter':
        location = "Morocco"
        price = 0.6 * budget
elif budget > 3000:
    place = "Hotel"
    if season == 'Summer':
        location = "Alaska"
        price = 0.9 * budget
    elif season == 'Winter':
        location = "Morocco"
        price = 0.9 * budget

print(f'{location} - {place} - {price:.2f}')
