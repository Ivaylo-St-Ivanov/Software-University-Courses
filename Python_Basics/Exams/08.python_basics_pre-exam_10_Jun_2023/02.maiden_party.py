# • Любовно послание - 0.60 лв.
# • Восъчна роза - 7.20 лв.
# • Ключодържател - 3.60 лв.
# • Карикатура - 18.20 лв.
# • Късмет изненада - 22 лв.
love_message = 0.60
wax_rose = 7.20
key_ring = 3.60
caricature = 18.20
lucky_surprise = 22

maiden_party_price = float(input())
love_message_count = int(input())
wax_rose_count = int(input())
key_ring_count = int(input())
caricatures_count = int(input())
lucky_surprise_count = int(input())

sum = love_message_count * love_message + wax_rose_count * wax_rose + key_ring_count * key_ring + caricatures_count * caricature + lucky_surprise_count * lucky_surprise
total_count = love_message_count + wax_rose_count + key_ring_count + caricatures_count + lucky_surprise_count

# Ако поръчаните артикули са 25 или повече магазинът прави отстъпка 35% от общата цена.
if total_count >= 25:
    sum *= 0.65

# От спечелените пари Михаела трябва да предвиди и 10% разход за хостинг.
sum *= 0.9

difference = abs(maiden_party_price - sum)

if maiden_party_price <= sum:
    print(f'Yes! {difference:.2f} lv left.')
else:
    print(f'Not enough money! {difference:.2f} lv needed.')
