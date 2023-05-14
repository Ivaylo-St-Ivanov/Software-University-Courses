x = float(input())
y = float(input())
h = float(input())

wallsArea = (x * x * 2 - 1.2 * 2) + (x * y * 2 - 1.5 * 1.5 * 2)
roofArea = (x * y * 2) + (x * h / 2 * 2)
greenPaint = wallsArea / 3.4
redPaint = roofArea / 4.3

print('%.2f' % greenPaint)
print('%.2f' % redPaint)