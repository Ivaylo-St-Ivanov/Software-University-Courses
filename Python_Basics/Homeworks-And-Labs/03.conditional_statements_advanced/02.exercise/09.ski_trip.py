roomForOnePersonPrice = 18.00
apartmentPrice = 25.00
presidentApartmentPrice = 35.00

days = int(input())
room = input()
evaluation = input()

finalPrice = 0

if room == 'room for one person':
    finalPrice = (days - 1) * roomForOnePersonPrice
elif room == 'apartment':
    finalPrice = (days - 1) * apartmentPrice
    if days < 10:
        finalPrice *= 0.70
    elif days >= 10 and days <= 15:
        finalPrice *= 0.65
    elif days > 15:
        finalPrice *= 0.50
elif room == 'president apartment':
    finalPrice = (days - 1) * presidentApartmentPrice
    if days < 10:
        finalPrice *= 0.90
    elif days >= 10 and days <= 15:
        finalPrice *= 0.85
    elif days > 15:
        finalPrice *= 0.80

if evaluation == 'positive':
    finalPrice *= 1.25
elif evaluation == 'negative':
    finalPrice *= 0.90

print(f'{finalPrice:.2f}')
