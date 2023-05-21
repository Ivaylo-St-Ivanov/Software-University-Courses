points_for_nominee = 1250.5

actor_name = input()
points = float(input())
evaluator_count = int(input())

is_nominee = False

for i in range(evaluator_count):
    evaluator_name = input()
    evaluator_points = float(input())

    points += len(evaluator_name) * evaluator_points / 2

    if points > points_for_nominee:
        print(f'Congratulations, {actor_name} got a nominee for leading role with {points:.1f}!')
        is_nominee = True
        break

difference = points_for_nominee - points
if not is_nominee:
    print(f'Sorry, {actor_name} you need {difference:.1f} more!')
