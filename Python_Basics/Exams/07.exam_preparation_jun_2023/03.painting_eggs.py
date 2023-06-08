red_large = 16
red_medium = 13
red_small = 9
green_large = 12
green_medium = 9
green_small = 8
yellow_large = 9
yellow_medium = 7
yellow_small = 5

size = input()
color = input()
shipment_count = int(input())

sum = shipment_count

if size == 'Large':
    if color == 'Red':
        sum *= red_large
    elif color == 'Green':
        sum *= green_large
    elif color == 'Yellow':
        sum *= yellow_large
elif size == 'Medium':
    if color == 'Red':
        sum *= red_medium
    elif color == 'Green':
        sum *= green_medium
    elif color == 'Yellow':
        sum *= yellow_medium
elif size == 'Small':
    if color == 'Red':
        sum *= red_small
    elif color == 'Green':
        sum *= green_small
    elif color == 'Yellow':
        sum *= yellow_small

#  С 35% от крайната цена ще бъдат покрити производствени разходи.
sum *= 0.65

print(f'{sum:.2f} leva.')
