budget = float(input())
season = input()

price = 0
type = 0
carClass = 0

if budget <= 100:
    carClass = "Economy class"
    if season == 'Summer':
        type = "Cabrio"
        price = 0.35 * budget
    elif season == 'Winter':
        type = "Jeep"
        price = 0.65 * budget
elif budget <= 500:
    carClass = "Compact class"
    if season == 'Summer':
        type = "Cabrio"
        price = 0.45 * budget
    elif season == 'Winter':
        type = "Jeep"
        price = 0.80 * budget
elif budget > 500:
    carClass = "Luxury class"
    type = "Jeep"
    price = 0.9 * budget

print(carClass)
print(f'{type} - {price:.2f}')
