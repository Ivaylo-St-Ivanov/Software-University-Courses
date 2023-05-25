from sys import maxsize

element = input()

max_number = -maxsize

while element != "Stop":
    num = int(element)
    if num > max_number:
        max_number = num

    element = input()

print(max_number)