food_in_kg = int(input())

food_in_gr = food_in_kg * 1000
is_enough = True
current = input()

while current != 'Adopted':
    current_portion = int(current)
    food_in_gr -= current_portion
    if food_in_gr < 0:
        is_enough = False

    current = input()

if is_enough:
    print(f'Food is enough! Leftovers: {food_in_gr} grams.')
else:
    print(f'Food is not enough. You need {abs(food_in_gr)} grams more.')
