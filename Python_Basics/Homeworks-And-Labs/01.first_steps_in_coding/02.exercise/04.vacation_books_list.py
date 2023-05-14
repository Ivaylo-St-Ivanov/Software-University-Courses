from math import floor

pages = int(input())
pages_per_one_hour = int(input())
days = int(input())

needed_hours = pages / pages_per_one_hour
hours_per_day = floor(needed_hours / days)

print(hours_per_day)