from math import floor

points_for_w = 2000
points_for_f = 1200
points_for_sf = 720

number_of_tournaments = int(input())
starting_points = int(input())

tournament_points = 0
wins = 0

for i in range(number_of_tournaments):
    current_tournament = input()

    if current_tournament == 'W':
        tournament_points += points_for_w
        wins += 1
    elif current_tournament == 'F':
        tournament_points += points_for_f
    elif current_tournament == 'SF':
        tournament_points += points_for_sf

total_points = starting_points + tournament_points
average_points = tournament_points / number_of_tournaments
win_percentage = wins / number_of_tournaments * 100

print(f'Final points: {total_points}')
print(f'Average points: {floor(average_points)}')
print(f'{win_percentage:.2f}%')
