jury_count = int(input())
current = input()

sum_of_all_grades = 0
presentation_count = 0

while current != "Finish":
    presentation_count += 1
    sumOfGrades = 0
    for i in range(jury_count):
        current_grade = float(input())
        sumOfGrades += current_grade
        sum_of_all_grades += current_grade
        
    average_grade = sumOfGrades / jury_count
    print(f'{current} - {average_grade:.2f}.')

    current = input()

average_gradeOfAll = sum_of_all_grades / (jury_count * presentation_count)
print(f"Student's final assessment is {average_gradeOfAll:.2f}.")
