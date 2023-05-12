dogs_pack = int(input())
cats_pack = int(input())

# една опаковка храна за кучета е на цена 2.50 лв, а опаковка храна за котки струва 4 лв
one_dogs_pack_price = 2.5
one_cats_pack_price = 4

total_sum = dogs_pack * one_dogs_pack_price + cats_pack * one_cats_pack_price

print(f'{total_sum} lv.')