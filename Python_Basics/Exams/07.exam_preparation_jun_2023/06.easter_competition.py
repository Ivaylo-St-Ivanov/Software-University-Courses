easter_bread_count = int(input())

best_result = 0
winner = ''

for e_b in range(easter_bread_count):
    chef_name = input()
    current = input()

    points = 0

    while current != 'Stop':
        evaluation = int(current)
        points += evaluation
        current = input()

    print(f'{chef_name} has {points} points.')
    
    if points > best_result:
        print(f'{chef_name} is the new number 1!')
        best_result = points
        winner = chef_name

print(f'{winner} won competition with {best_result} points!')
