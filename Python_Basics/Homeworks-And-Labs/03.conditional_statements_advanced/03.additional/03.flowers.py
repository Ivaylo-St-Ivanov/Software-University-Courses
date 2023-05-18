chrysanthemumsSpringSummerPrice = 2.00
rosesSpringSummerPrice = 4.10
tulipsSpringSummerPrice = 2.50
chrysanthemumsAutumnWinterPrice = 3.75
rosesAutumnWinterPrice = 4.50
tulipsAutumnWinterPrice = 4.15
arranging = 2.00

chrysanthemumsCount = int(input())
rosesCount = int(input())
tulipsCount = int(input())
season = input()
day = input()

price = 0

#  • В празнични дни цените на всички цветя се увеличават с 15%.
#    Предлагат се следните отстъпки:
#  • За закупени повече от 7 лалета през пролетта – 5% от цената на целият букет.
#  • За закупени 10 или повече рози през зимата – 10% от цената на целият букет.
#  • За закупени повече от 20 цветя общо през всички сезони – 20% от цената на целият букет.

if season == "Spring" or season == "Summer":
    price = chrysanthemumsCount * chrysanthemumsSpringSummerPrice + rosesCount * rosesSpringSummerPrice + tulipsCount * tulipsSpringSummerPrice;
    if day == "Y":
        price *= 1.15
    if tulipsCount > 7 and season == "Spring":
        price *= 0.95
elif season == "Autumn" or season == "Winter":
    price = chrysanthemumsCount * chrysanthemumsAutumnWinterPrice + rosesCount * rosesAutumnWinterPrice + tulipsCount * tulipsAutumnWinterPrice;
    if day == "Y":
        price *= 1.15
    if rosesCount >= 10 and season == "Winter":
        price *= 0.9

if chrysanthemumsCount + rosesCount + tulipsCount > 20:
    price *= 0.8

totalPrice = price + arranging
print(f'{totalPrice:.2f}')
