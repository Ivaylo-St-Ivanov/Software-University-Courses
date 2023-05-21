levels = int(input())

points = 0
p1_counter = 0
p2_counter = 0
p3_counter = 0
p4_counter = 0
p5_counter = 0
invalid_counter = 0

#  • От 0 до 9 - 20 % от числото          • От 30 до 39 - 50 точки
#  • От 10 до 19 - 30 % от числото        • От 40 до 50 - 100 точки
#  • От 20 до 29 - 40 % от числото        • Невалидно число - резултата се дели на 2

for i in range(levels):
    current_level_points = int(input())
    if current_level_points > 39 and current_level_points <= 50:
        points += 100
        p5_counter += 1
    elif current_level_points > 29 and current_level_points < 40:
        points += 50
        p4_counter += 1
    elif current_level_points > 19 and current_level_points < 30:
        points += 0.4 * current_level_points
        p3_counter += 1
    elif current_level_points > 9 and current_level_points < 20:
        points += 0.3 * current_level_points
        p2_counter += 1
    elif current_level_points >= 0 and current_level_points < 10:
        points += 0.2 * current_level_points
        p1_counter += 1
    elif current_level_points > 50 or current_level_points < 0:
        points /= 2
        invalid_counter += 1
        
p1_percentage = p1_counter / levels * 100
p2_percentage = p2_counter / levels * 100
p3_percentage = p3_counter / levels * 100
p4_percentage = p4_counter / levels * 100
p5_percentage = p5_counter / levels * 100
invalid_percentage = invalid_counter / levels * 100

print(f'{points:.2f}')
print(f'From 0 to 9: {p1_percentage:.2f}%')
print(f'From 10 to 19: {p2_percentage:.2f}%')
print(f'From 20 to 29: {p3_percentage:.2f}%')
print(f'From 30 to 39: {p4_percentage:.2f}%')
print(f'From 40 to 50: {p5_percentage:.2f}%')
print(f'Invalid numbers: {invalid_percentage:.2f}%')
