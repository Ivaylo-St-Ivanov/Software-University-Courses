daysOfTheYear = 365
normForPlay = 30000
playInWorkingDay = 63
playInRestDay = 127

restDay = int(input())

workingDay = daysOfTheYear - restDay
totalTimeForPlay = workingDay * playInWorkingDay + restDay * playInRestDay
difference = abs(normForPlay - totalTimeForPlay)
hours = difference // 60
minutes = difference % 60

if totalTimeForPlay > normForPlay:
    print("Tom will run away")
    print(f'{hours} hours and {minutes} minutes more for play')
else:
    print("Tom sleeps well")
    print(f'{hours} hours and {minutes} minutes less for play')
