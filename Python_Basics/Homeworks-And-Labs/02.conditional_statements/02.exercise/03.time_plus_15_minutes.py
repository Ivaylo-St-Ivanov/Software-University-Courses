startHour = int(input())
startMinutes = int(input())

timeInMin = startHour * 60 + startMinutes
timePlus15Min = timeInMin + 15
hour = timePlus15Min // 60
minutes = timePlus15Min % 60

if hour > 23:
    hour = 0

if minutes < 10:
    print(f'{hour}:0{minutes}')
else:
    print(f'{hour}:{minutes}')