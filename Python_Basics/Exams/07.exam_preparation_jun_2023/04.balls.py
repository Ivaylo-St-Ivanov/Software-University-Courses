balls_count = int(input())

points = 0
red_balls = 0
orange_balls = 0
yellow_balls = 0
white_balls = 0
black_balls = 0
other_color_balls = 0

for balls in range(balls_count):
    current_color = input()

    if current_color == 'red':
        # · Ако топката е "red" точките ни се повишават с 5.
        points += 5
        red_balls += 1
    elif current_color == 'orange':
        # · Ако топката е "orange" точките ни се повишават с 10.
        points += 10
        orange_balls += 1
    elif current_color == 'yellow':
        # · Ако топката е "yellow" точките ни се повишават с 15.
        points += 15
        yellow_balls += 1
    elif current_color == 'white':
        # · Ако топката е "white" точките ни се повишават с 20.
        points += 20
        white_balls += 1
    elif current_color == 'black':
        # · Ако топката е "black" точките ни се делят на 2 (целочислено).
        points //= 2
        black_balls += 1
    else:
        other_color_balls += 1

print(f'Total points: {points}')
print(f'Red balls: {red_balls}')
print(f'Orange balls: {orange_balls}')
print(f'Yellow balls: {yellow_balls}')
print(f'White balls: {white_balls}')
print(f'Other colors picked: {other_color_balls}')
print(f'Divides from black balls: {black_balls}')
