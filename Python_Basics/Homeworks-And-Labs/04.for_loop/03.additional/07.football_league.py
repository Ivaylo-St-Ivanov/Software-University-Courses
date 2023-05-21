capacity = int(input())
fens_count = int(input())

counter_a = 0
counter_b = 0
counter_v = 0
counter_g = 0

for i in range(fens_count):
    current = input()
    if current == 'A':
        counter_a += 1
    elif current == 'B':
        counter_b += 1
    elif current == 'V':
        counter_v += 1
    elif current == 'G':
        counter_g += 1
        
sector_a_percentage = counter_a / fens_count * 100
sector_b_percentage = counter_b / fens_count * 100
sector_v_percentage = counter_v / fens_count * 100
sector_g_percentage = counter_g / fens_count * 100
all_fens_percentage = (counter_a + counter_b + counter_v + counter_g) / capacity * 100

print(f'{sector_a_percentage:.2f}%')
print(f'{sector_b_percentage:.2f}%')
print(f'{sector_v_percentage:.2f}%')
print(f'{sector_g_percentage:.2f}%')
print(f'{all_fens_percentage:.2f}%')
