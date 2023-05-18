month = input()
nights = int(input())

priceForStudio = 0
priceForApartment = 0

if month == "May" or month == "October":
    priceForStudio = nights * 50
    priceForApartment = nights * 65
    if nights > 7 and nights < 14:
        priceForStudio = priceForStudio * 0.95
    elif nights > 14:
        priceForStudio = priceForStudio * 0.7
elif month == "June" or month == "September":
    priceForStudio = nights * 75.2
    priceForApartment = nights * 68.7
    if nights > 14:
        priceForStudio = priceForStudio * 0.8
elif month == "July" or month == "August":
    priceForStudio = nights * 76
    priceForApartment = nights * 77

if nights > 14:
    priceForApartment = priceForApartment * 0.9

print(f'Apartment: {priceForApartment:.2f} lv.')
print(f'Studio: {priceForStudio:.2f} lv.')
