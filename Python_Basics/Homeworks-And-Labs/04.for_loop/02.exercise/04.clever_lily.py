age = int(input())
washing_machine_price = float(input())
unit_price_of_a_toy = int(input())

toys_count = 0
saved_money = 0
gift_money = 10

for i in range(1, age + 1):
    if i % 2 != 0:
        toys_count += 1
    else:
        saved_money += gift_money - 1
        gift_money += 10

sum_of_toys = toys_count * unit_price_of_a_toy
difference = abs(sum_of_toys + saved_money - washing_machine_price)

if sum_of_toys + saved_money >= washing_machine_price:
    print(f'Yes! {difference:.2f}')
else:
    print(f'No! {difference:.2f}')
