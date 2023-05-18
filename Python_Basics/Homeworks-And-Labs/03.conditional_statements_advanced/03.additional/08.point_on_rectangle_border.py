x1 = float(input())
y1 = float(input())
x2 = float(input())
y2 = float(input())
x = float(input())
y = float(input())

isBorder = False

if x1 < x2 and y1 < y2:
    if x == x1 and y >= y1 and y <= y2:
        isBorder = True
    elif x == x2 and y >= y1 and y <= y2:
        isBorder = True
    elif y == y1 and x >= x1 and x <= x2:
        isBorder = True
    elif y == y2 and x >= x1 and x <= x2:
        isBorder = True

if isBorder:
    print("Border")
else:
    print("Inside / Outside")
