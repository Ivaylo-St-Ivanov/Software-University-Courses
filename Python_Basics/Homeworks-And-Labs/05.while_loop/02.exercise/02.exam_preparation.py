low_grades = int(input())
current = input()

low_grades_counter = 0
grade_counter = 0
sum_of_grades = 0
is_needA_break = False
last_problem = ""

while current != "Enough":
    last_problem = current
    grade_counter += 1
    currentGrade = int(input())
    sum_of_grades += currentGrade
    if currentGrade <= 4:
        low_grades_counter += 1
        if low_grades_counter == low_grades:
            is_needA_break = True
            print(f'You need a break, {low_grades_counter} poor grades.')
            break

    current = input()

average = sum_of_grades / grade_counter

if not is_needA_break:
    print(f'Average score: {average:.2f}')
    print(f'Number of problems: {grade_counter}')
    print(f'Last problem: {last_problem}')
