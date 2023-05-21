minibus_price_per_ton = 200;     # • До 3 тона – микробус (200 лева на тон)
truck_price_per_ton = 175;       # • От 4 до 11 тона – камион (175 лева на тон)
train_price_per_ton = 120;       # • 12 и повече тона – влак (120 лева на тон)

goods_count = int(input())

minibus_tonnage_counter = 0
truck_tonnage_counter = 0
train_tonnage_counter = 0
total_price = 0

for i in range(goods_count):
    current_tonnage = int(input())
    if current_tonnage > 11:
        train_tonnage_counter += current_tonnage
        total_price += current_tonnage * train_price_per_ton
    elif current_tonnage > 3:
        truck_tonnage_counter += current_tonnage
        total_price += current_tonnage * truck_price_per_ton
    else:
        minibus_tonnage_counter += current_tonnage
        total_price += current_tonnage * minibus_price_per_ton
        
total_tonnage = minibus_tonnage_counter + truck_tonnage_counter + train_tonnage_counter
average_price_per_ton = total_price / total_tonnage
minibus_percentage_tonnage = minibus_tonnage_counter / total_tonnage * 100
truck_percentage_tonnage = truck_tonnage_counter / total_tonnage * 100
train_percentage_tonnage = train_tonnage_counter / total_tonnage * 100

print(f'{average_price_per_ton:.2f}')
print(f'{minibus_percentage_tonnage:.2f}%')
print(f'{truck_percentage_tonnage:.2f}%')
print(f'{train_percentage_tonnage:.2f}%')
