payPerKmForSpringAutumnUnder5000km = 0.75
payPerKmForSummerUnder5000Km = 0.90
payPerKmForWinterUnder5000Km = 1.05
payPerKmForSpringAutumnUnder10000km = 0.95
payPerKmForSummerUnder10000Km = 1.10
payPerKmForWinterUnder10000Km = 1.25
payPerKmAllSeasonUnder20000Km = 1.45
# Един сезон е 4 месеца.
workSeason = 4

season = input()
kmPerMonth = int(input())

salary = kmPerMonth * workSeason

if kmPerMonth <= 5000:
    if season == 'Spring' or season == 'Autumn':
        salary *= payPerKmForSpringAutumnUnder5000km
    elif season == 'Summer':
        salary *= payPerKmForSummerUnder5000Km
    elif season == 'Winter':
        salary *= payPerKmForWinterUnder5000Km
elif kmPerMonth <= 10000:
    if season == 'Spring' or season == 'Autumn':
        salary *= payPerKmForSpringAutumnUnder10000km
    elif season == 'Summer':
        salary *= payPerKmForSummerUnder10000Km
    elif season == 'Winter':
        salary *= payPerKmForWinterUnder10000Km
elif kmPerMonth <= 20000:
    salary *= payPerKmAllSeasonUnder20000Km

# След като са извадени 10% за данъци се отпечатват останалите пари.
salary *= 0.9
print(f'{salary:.2f}')
