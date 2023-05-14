pen_packs = int(input()) 
marker_packs = int(input()) 
preparation = int(input()) 
percent = int(input()) 

# • Пакет химикали - 5.80 лв.
# • Пакет маркери - 7.20 лв.
# • Препарат - 1.20 лв (за литър) 
pen_pack_price = 5.8
marker_pack_price = 7.2
preparation_price = 1.2

sum = pen_packs * pen_pack_price + marker_packs * marker_pack_price + preparation * preparation_price
sum -= sum * percent / 100

print(float(sum))