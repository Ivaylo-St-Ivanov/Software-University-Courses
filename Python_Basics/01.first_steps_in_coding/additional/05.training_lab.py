w = float(input())
h = float(input())

rows = int(w * 100 / 120)
cols = int((h * 100 - 100) / 70)

print(rows * cols - 3)