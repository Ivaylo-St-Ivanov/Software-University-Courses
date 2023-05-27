floors_count = int(input())
rooms_count_per_floor = int(input())

for f in range(floors_count, 0, -1):
    printLine = ""
    for r in range(rooms_count_per_floor):
        if f == floors_count:
            printLine += f'L{f}{r} '
        elif f % 2 != 0:
            printLine += f'A{f}{r} '
        else:
            printLine += f'O{f}{r} '
            
    print(printLine)
    