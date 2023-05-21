num = int(input())

p1_counter = 0
p2_counter = 0
p3_counter = 0
p4_counter = 0
p5_counter = 0

for i in range(num):
    current = int(input())

    if current < 200:
        p1_counter += 1
    elif current >= 200 and current < 400:
        p2_counter += 1
    elif current >= 400 and current < 600:
        p3_counter += 1
    elif current >= 600 and current < 800:
        p4_counter += 1
    elif current >= 800:
        p5_counter += 1

p1_percentage = p1_counter / num * 100
p2_percentage = p2_counter / num * 100
p3_percentage = p3_counter / num * 100
p4_percentage = p4_counter / num * 100
p5_percentage = p5_counter / num * 100

print(f'{p1_percentage:.2f}%')
print(f'{p2_percentage:.2f}%')
print(f'{p3_percentage:.2f}%')
print(f'{p4_percentage:.2f}%')
print(f'{p5_percentage:.2f}%')
