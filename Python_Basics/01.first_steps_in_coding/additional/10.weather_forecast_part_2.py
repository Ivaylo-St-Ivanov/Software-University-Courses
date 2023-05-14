t = float(input())

if t >= 5 and t <= 11.9: 
    print("Cold")
if t >= 12 and t <= 14.9:
    print("Cool")
if t >= 15 and t <= 20:
    print("Mild")
if t >= 20.1 and t <= 25.9:
    print("Warm")
if t >= 26 and t <= 35:
    print("Hot")
if t < 5 or t > 35:
    print('unknown')