fee = int(input())

# • Баскетболни кецове – цената им е 40% по-малка от таксата за една година
# • Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
# • Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
# • Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка 
snickers_price = fee * 0.6
outfit_price = snickers_price * 0.8
ball = outfit_price / 4
accessories_price = ball / 5

needed_sum = fee + snickers_price + outfit_price + ball + accessories_price

print(needed_sum)