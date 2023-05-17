dayOfWeek = int(input())

output = ''

if dayOfWeek == 1:
    output = 'Monday'
elif dayOfWeek == 2:
    output = 'Tuesday'
elif dayOfWeek == 3:
    output = 'Wednesday'
elif dayOfWeek == 4:
    output = 'Thursday'
elif dayOfWeek == 5:
    output = 'Friday'
elif dayOfWeek == 6:
    output = 'Saturday'
elif dayOfWeek == 7:
    output = 'Sunday'
else:
    output = 'Error'

print(output)