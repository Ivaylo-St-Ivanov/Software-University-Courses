name = input()

grade_count = 1
sum_evaluation = 0
excluded_count = 0
is_excluded = False

while grade_count <= 12:
    annual_evaluation = float(input())
    if annual_evaluation < 4:
        excluded_count += 1
        if excluded_count > 1:
            is_excluded = True
            break
        continue

    sum_evaluation += annual_evaluation
    grade_count += 1
   

average_evaluation = sum_evaluation / 12

if is_excluded:
    print(f'{name} has been excluded at {grade_count} grade')
else:
    print(f'{name} graduated. Average grade: {average_evaluation:.2f}')
