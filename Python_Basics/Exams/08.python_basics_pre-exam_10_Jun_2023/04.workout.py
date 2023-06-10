from math import ceil

# За да успее да отслабне, тя трябва да избяга минимум 1 000 км.
quota = 1000

days = int(input())
first_day_running_kilometers = float(input())

total_kilometers = first_day_running_kilometers
last_day = first_day_running_kilometers

for days in range(days):
    current_day_percentage = int(input())
    current_day_kilometers = last_day * (current_day_percentage / 100) + last_day

    total_kilometers += current_day_kilometers
    last_day = current_day_kilometers

difference = ceil(abs(quota - total_kilometers))

if total_kilometers >= quota:
    print(f"You've done a great job running {difference} more kilometers!")
else:
    print(f'Sorry Mrs. Ivanova, you need to run {difference} more kilometers')
