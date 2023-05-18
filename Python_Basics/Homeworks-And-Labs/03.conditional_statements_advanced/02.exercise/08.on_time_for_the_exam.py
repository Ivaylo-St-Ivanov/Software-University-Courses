hourOfExam = int(input())
minutesOfTheExam = int(input())
hourOfArrival = int(input())
minutesOfArrival = int(input())

examTimeInMin = hourOfExam * 60 + minutesOfTheExam
arrivalTimeInMin = hourOfArrival * 60 + minutesOfArrival
difference = abs(examTimeInMin - arrivalTimeInMin)
hours = difference // 60
minutes = difference % 60

if arrivalTimeInMin > examTimeInMin:
    print("Late")
    if difference < 60:
        print(f'{minutes} minutes after the start')
    elif difference >= 60:
        if minutes < 10:
            print(f'{hours}:0{minutes} hours after the start')
        else:
            print(f'{hours}:{minutes} hours after the start')
elif arrivalTimeInMin == examTimeInMin or difference <= 30:
    print("On time")
    print(f'{minutes} minutes before the start')
elif difference > 30:
    print("Early")
    if difference < 60:
        print(f'{minutes} minutes before the start')
    elif difference >= 60:
        if minutes < 10:
            print(f'{hours}:0{minutes} hours before the start')
        else:
            print(f'{hours}:{minutes} hours before the start')
