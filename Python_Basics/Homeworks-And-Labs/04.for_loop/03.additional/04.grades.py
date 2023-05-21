students_count = int(input())

counter_top_grades = 0
counter_grades_between_4_and_5 = 0
counter_grades_between_3_and_4 = 0
counter_low_grades = 0
sum_of_grades = 0

for i in range(students_count):
    current_grade = float(input())
    sum_of_grades += current_grade
    if current_grade > 4.99:
        counter_top_grades += 1
    elif current_grade > 3.99:
        counter_grades_between_4_and_5 += 1
    elif current_grade > 2.99:
        counter_grades_between_3_and_4 += 1
    else:
        counter_low_grades += 1
        
top_grades_percentage = counter_top_grades / students_count * 100
grades_between_4_and_5_percentage = counter_grades_between_4_and_5 / students_count * 100
grades_between_3_and_4_percentage = counter_grades_between_3_and_4 / students_count * 100
low_grades_percentage = counter_low_grades / students_count * 100
average_grades = sum_of_grades / students_count

print(f'Top students: {top_grades_percentage:.2f}%')
print(f'Between 4.00 and 4.99: {grades_between_4_and_5_percentage:.2f}%')
print(f'Between 3.00 and 3.99: {grades_between_3_and_4_percentage:.2f}%')
print(f'Fail: {low_grades_percentage:.2f}%')
print(f'Average: {average_grades:.2f}')
