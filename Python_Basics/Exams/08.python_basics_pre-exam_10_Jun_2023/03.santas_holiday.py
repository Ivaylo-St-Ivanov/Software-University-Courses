# • "room for one person" – 18.00 лв за нощувка
# • "apartment" – 25.00 лв за нощувка
# • "president apartment" – 35.00 лв за нощувка
room_for_one_person = 18
apartment = 25
president_apartment = 35

days = int(input())
room = input()
evaluation = input()

nights = days - 1
sum = 0

if room == 'room for one person':
    sum = nights * room_for_one_person
elif room == 'apartment':
    sum = nights * apartment
    if days < 10:
        sum *= 0.7
    elif days <= 15:
        sum *= 0.65
    else:
        sum *= 0.5
elif room == 'president apartment':
    sum = nights * president_apartment
    if days < 10:
        sum *= 0.9
    elif days <= 15:
        sum *= 0.85
    else:
        sum *= 0.8

# Ако оценката му е позитивна, към цената с вече приспаднатото намаление Дядо Коледа добавя 25% към нея. 
# Ако оценката му е негативна приспада от цената 10%.
if evaluation == 'positive':
    sum *= 1.25
else:
    sum *= 0.9

print(f'{sum:.2f}')
