control_time_minutes = int(input())
control_time_seconds = int(input())
distance_in_meters = float(input())
seconds_per_100_meters = int(input())

control_time_in_sec = control_time_minutes * 60 + control_time_seconds

# Трябва да се има предвид, че поради наклона на улея, на всеки 120 метра неговото време намаля с 2.5 секунди.
delay = distance_in_meters / 120 * 2.5

Marins_time = distance_in_meters / 100 * seconds_per_100_meters - delay

if Marins_time <= control_time_in_sec:
    print('Marin Bangiev won an Olympic quota!')
    print(f'His time is {Marins_time:.3f}.')
else:
    print(f'No, Marin failed! He was {Marins_time - control_time_in_sec:.3f} second slower.')
