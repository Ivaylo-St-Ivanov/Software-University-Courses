number_of_groups = int(input())

climbing_musala = 0
climbing_mont_blanc = 0
climbing_kilimanjaro = 0
climbing_k2 = 0
climbing_everest = 0

for i in range(number_of_groups):
    people_in_current_group = int(input())
    if people_in_current_group > 40:
        climbing_everest += people_in_current_group
    elif people_in_current_group > 25:
        climbing_k2 += people_in_current_group
    elif people_in_current_group > 12:
        climbing_kilimanjaro += people_in_current_group
    elif people_in_current_group > 5:
        climbing_mont_blanc += people_in_current_group
    else:
        climbing_musala += people_in_current_group

all_climbers = climbing_musala + climbing_mont_blanc + climbing_kilimanjaro + climbing_k2 + climbing_everest
climbing_musala_percentage = climbing_musala / all_climbers * 100
climbing_mont_blanc_percentage = climbing_mont_blanc / all_climbers * 100
climbing_kilimanjaro_percentage = climbing_kilimanjaro / all_climbers * 100
climbing_k2_percentage = climbing_k2 / all_climbers * 100
climbing_everest_percentage = climbing_everest / all_climbers * 100

print(f'{climbing_musala_percentage:.2f}%')
print(f'{climbing_mont_blanc_percentage:.2f}%')
print(f'{climbing_kilimanjaro_percentage:.2f}%')
print(f'{climbing_k2_percentage:.2f}%')
print(f'{climbing_everest_percentage:.2f}%')
