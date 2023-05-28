start_letter = input()
end_letter = input()
special_letter = input()

start = ord(start_letter)
end = ord(end_letter)
special = ord(special_letter)

counter = 0
print_line = ''

for i in range(start, end + 1):
    for j in range(start, end + 1):
        for k in range(start, end + 1):
            if i != special and j != special and k != special:
                counter += 1
                print_line += f'{str(chr(i))}{str(chr(j))}{str(chr(k))} '

print(print_line + str(counter))
