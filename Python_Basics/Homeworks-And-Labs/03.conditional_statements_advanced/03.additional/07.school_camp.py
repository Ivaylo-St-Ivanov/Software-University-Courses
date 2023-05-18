overnightPriceGirlsOrBoysForWinter = 9.60
overnightPriceGirlsOrBoysForSpring = 7.20
overnightPriceGirlsOrBoysForSummer = 15.00
overnightPriceMixedGroupForWinter = 10.00
overnightPriceMixedGroupForSpring = 9.50
overnightPriceMixedGroupForSummer = 20.00

# спортовете, които ще се практикуват в зависимост от вида на ваканцията и групата:
girlsWinter = "Gymnastics"
girlsSpring = "Athletics"
girlsSummer = "Volleyball"
boysWinter = "Judo"
boysSpring = "Tennis"
boysSummer = "Football"
mixedGroupWinter = "Ski"
mixedGroupSpring = "Cycling"
mixedGroupSummer = "Swimming"

season = input()
group = input()
studentsCount = int(input())
overnightCount = int(input())

price = studentsCount * overnightCount
sport = ""

if group == 'boys':
    if season == 'Winter':
        sport = boysWinter
        price *= overnightPriceGirlsOrBoysForWinter
    elif season == 'Spring':
        sport = boysSpring
        price *= overnightPriceGirlsOrBoysForSpring
    elif season == 'Summer':
        sport = boysSummer
        price *= overnightPriceGirlsOrBoysForSummer
elif group == 'girls':
    if season == 'Winter':
        sport = girlsWinter
        price *= overnightPriceGirlsOrBoysForWinter
    elif season == 'Spring':
        sport = girlsSpring
        price *= overnightPriceGirlsOrBoysForSpring
    elif season == 'Summer':
        sport = girlsSummer
        price *= overnightPriceGirlsOrBoysForSummer
elif group == 'mixed':
    if season == 'Winter':
        sport = mixedGroupWinter
        price *= overnightPriceMixedGroupForWinter
    elif season == 'Spring':
        sport = mixedGroupSpring
        price *= overnightPriceMixedGroupForSpring
    elif season == 'Summer':
        sport = mixedGroupSummer
        price *= overnightPriceMixedGroupForSummer
    
#  • Ако броят на учениците е 50 или повече, училището получава 50% отстъпка
#  • Ако броят на учениците е 20 или повече и в същото време по-малък от 50, училището получава 15% отстъпка
#  • Ако броят на учениците е 10 или повече и в същото време по-малък от 20, училището получава 5% отстъпка
if studentsCount >= 50:
    price *= 0.5
elif studentsCount >= 20:
    price *= 0.85
elif studentsCount >= 10:
    price *= 0.95
    
print(f'{sport} {price:.2f} lv.')
