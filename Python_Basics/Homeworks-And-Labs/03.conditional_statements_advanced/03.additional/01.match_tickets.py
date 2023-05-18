vipPrice = 499.99
normalPrice = 249.99

budget = int(input())
category = input()
groupCount = int(input())

transport = 0

#  броят на хората в групата определя какъв процент от бюджета трябва да се задели за транспорт
#  • От 1 до 4 – 75% от бюджета.
#  • От 5 до 9 – 60% от бюджета.
#  • От 10 до 24 – 50% от бюджета.
#  • От 25 до 49 – 40% от бюджета.
#  • 50 или повече – 25% от бюджета.

if groupCount <= 4:
    transport = 0.75 * budget
elif groupCount > 4 and groupCount <= 9:
    transport = 0.60 * budget
elif groupCount > 9 and groupCount <= 24:
    transport = 0.50 * budget
elif groupCount > 24 and groupCount <= 49:
    transport = 0.40 * budget
elif groupCount > 49:
    transport = 0.25 * budget

difference = abs(budget - transport)
ticketsPrice = 0

if category == 'VIP':
    ticketsPrice = groupCount * vipPrice
elif category == 'Normal':
    ticketsPrice = groupCount * normalPrice

residue = abs(difference - ticketsPrice)
    
if difference >= ticketsPrice:
    print(f'Yes! You have {residue:.2f} leva left.')
else:
    print(f'Not enough money! You need {residue:.2f} leva.')
