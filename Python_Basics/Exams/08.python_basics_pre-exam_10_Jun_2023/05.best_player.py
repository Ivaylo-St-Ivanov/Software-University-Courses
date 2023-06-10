player_name = input()

# Хет-трик е, когато футболистът е вкарал 3 или повече гола.
is_made_a_hat_trick = False
best_player = ''
goals = 0

while player_name != 'END':
    goals_count = int(input())

    if goals_count > goals:
        best_player = player_name
        goals = goals_count
        if goals_count >= 3:
            is_made_a_hat_trick = True

    # Ако футболист е вкарал 10 или повече гола, програмата трябва да спре.
    if goals_count >= 10:
        break

    player_name = input()

print(f'{best_player} is the best player!')

if is_made_a_hat_trick:
    print(f'He has scored {goals} goals and made a hat-trick !!!')
else:
    print(f'He has scored {goals} goals.')
