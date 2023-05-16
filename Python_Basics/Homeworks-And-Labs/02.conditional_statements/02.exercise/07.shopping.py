budget = float(input())
videoCardsCount = int(input())
processorsCount = int(input())
ramMemoryCount = int(input())

oneVideoCardPrice = 250
videoCardsPrice = videoCardsCount * oneVideoCardPrice
processorsPrice = processorsCount * (videoCardsPrice * 0.35)
ramMemoryPrice = ramMemoryCount * (videoCardsPrice * 0.1)
totalPrice = videoCardsPrice + processorsPrice + ramMemoryPrice

if videoCardsCount > processorsCount:
        totalPrice *= 0.85

difference = abs(budget - totalPrice)

if budget >= totalPrice:
    print(f'You have {difference:.2f} leva left!')
else:
    print(f'Not enough money! You need {difference:.2f} leva more!')