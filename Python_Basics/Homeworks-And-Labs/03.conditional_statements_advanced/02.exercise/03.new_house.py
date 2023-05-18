rosesPrice = 5.00
dahliasPrice = 3.80
tulipsPrice = 2.80
narcissusPrice = 3.00
gladiolusPrice = 2.50

kindOfFlowers = input()
flowersCount = int(input())
budget = int(input())

finalPrice = 0

if kindOfFlowers == 'Roses':
    finalPrice = flowersCount * rosesPrice
    if flowersCount > 80:
        finalPrice *= 0.90
elif kindOfFlowers == 'Dahlias':
    finalPrice = flowersCount * dahliasPrice
    if flowersCount > 90:
        finalPrice *= 0.85
elif kindOfFlowers == 'Tulips':
    finalPrice = flowersCount * tulipsPrice
    if flowersCount > 80:
        finalPrice *= 0.85
elif kindOfFlowers == 'Narcissus':
    finalPrice = flowersCount * narcissusPrice
    if flowersCount < 120:
        finalPrice *= 1.15
elif kindOfFlowers == 'Gladiolus':
    finalPrice = flowersCount * gladiolusPrice
    if flowersCount < 80:
        finalPrice *= 1.20

difference = f'{abs(budget - finalPrice):.2f}'

if budget >= finalPrice:
    print(f'Hey, you have a great garden with {flowersCount} {kindOfFlowers} and {difference} leva left.')
else:
    print(f'Not enough money, you need {difference} leva more.')
