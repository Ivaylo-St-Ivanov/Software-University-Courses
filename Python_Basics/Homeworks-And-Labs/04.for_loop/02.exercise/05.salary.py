fine_for_facebook = 150
fine_for_instagram = 100
fine_for_reddit = 50

open_tabs_count = int(input())
salary = float(input())

is_have_salary = True

for i in range(open_tabs_count):
    current_tab = input()

    if current_tab == 'Facebook':
        salary -= fine_for_facebook
    elif current_tab == 'Instagram':
        salary -= fine_for_instagram
    elif current_tab == 'Reddit':
        salary -= fine_for_reddit

    if salary <= 0:
        print("You have lost your salary.")
        is_have_salary = False
        break

if is_have_salary:
    print(int(salary))
