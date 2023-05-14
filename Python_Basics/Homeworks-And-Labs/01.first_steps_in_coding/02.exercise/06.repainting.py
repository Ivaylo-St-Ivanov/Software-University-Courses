nylon = int(input())
paint = int(input())
tinner = int(input())
needed_hours = int(input())

# · Предпазен найлон - 1.50 лв. за кв. метър
# · Боя - 14.50 лв. за литър
# · Разредител за боя - 5.00 лв. за литър 
nylon_price = 1.5
paint_price = 14.5
tinner_price = 5

# За всеки случай, към необходимите материали, Румен иска да добави още 10% от количеството боя и 2 кв.м. найлон, разбира се и 0.40 лв. за торбички.
sum = (nylon + 2) * nylon_price + (paint * 1.1) * paint_price + tinner * tinner_price + 0.4

# Сумата, която се заплаща на майсторите за 1 час работа, е равна на 30% от сбора на всички разходи за материали. 
workers_salary_per_hour = sum * 0.3

total_sum = sum + needed_hours * workers_salary_per_hour

print(total_sum)
