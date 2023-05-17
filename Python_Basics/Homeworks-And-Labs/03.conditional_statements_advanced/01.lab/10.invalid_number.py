num = int(input())

isValid = num >= 100 and num <= 200 or num == 0
if not isValid:
    print("invalid")
