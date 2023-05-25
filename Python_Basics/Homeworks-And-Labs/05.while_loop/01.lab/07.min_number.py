from sys import maxsize

element = input()

min_number = maxsize

while element != "Stop":
    current_num = int(element)
    if current_num < min_number:
        min_number = current_num

    element = input()

print(min_number)