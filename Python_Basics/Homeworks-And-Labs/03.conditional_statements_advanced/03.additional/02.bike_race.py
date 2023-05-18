juniorsTrailTax = 5.50
juniorsCrossTax = 8.00
juniorsDownhillTax = 12.25
juniorsRoadTax = 20.00
seniorsTrailTax = 7.00
seniorsCrossTax = 9.50
seniorsDownhillTax = 13.75
seniorsRoadTax = 21.50

juniorsCount = int(input())
seniorsCount = int(input())
route = input()

totalTax = 0

if route == 'trail':
    totalTax = juniorsCount * juniorsTrailTax + seniorsCount * seniorsTrailTax
elif route == 'cross-country':
    totalTax = juniorsCount * juniorsCrossTax + seniorsCount * seniorsCrossTax
    # Ако в "cross-country" състезанието се съберат 50 или повече участника(общо младши и старши), таксата намалява с 25%.
    if juniorsCount + seniorsCount >= 50:
        totalTax *= 0.75
elif route == 'downhill':
    totalTax = juniorsCount * juniorsDownhillTax + seniorsCount * seniorsDownhillTax
elif route == 'road':
    totalTax = juniorsCount * juniorsRoadTax + seniorsCount * seniorsRoadTax

# Организаторите отделят 5% процента от събраната сума за разходи.
totalTax *= 0.95

print(f'{totalTax:.2f}')
