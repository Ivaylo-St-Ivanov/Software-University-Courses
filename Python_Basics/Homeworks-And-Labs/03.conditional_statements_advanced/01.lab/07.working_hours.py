hour = int(input())
day = input()

if day != "Sunday" and hour >= 10 and hour <=18:
    print("open")
else:
    print("closed")