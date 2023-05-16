from math import ceil

series = input()
durationEpisode = int(input())
durationRest = int(input())

lunchTime = durationRest / 8
relaxationTime = durationRest / 4

freeTime = durationRest - lunchTime - relaxationTime
difference = abs(freeTime - durationEpisode)

if freeTime >= durationEpisode:
    print(f'You have enough time to watch {series} and left with {ceil(difference)} minutes free time.')
else:
    print(f"You don't have enough time to watch {series}, you need {ceil(difference)} more minutes.")