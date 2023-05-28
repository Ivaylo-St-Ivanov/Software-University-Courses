last_sector = input()
rows_in_sector_a = int(input())
seats_count_in_odd_row = int(input())

first_sector = 'A'
first_sector_as_num = ord(first_sector)
last_sector_as_num = ord(last_sector)
seats_counter = 0
rows = rows_in_sector_a

for i in range(first_sector_as_num, last_sector_as_num + 1):
    for j in range(1, rows + 1):
        start_seat = 97
        seats = ''
        if j % 2 != 0:
            seats = seats_count_in_odd_row
        else:
            seats = seats_count_in_odd_row + 2
        
        for k in range(1, seats + 1):
            seats_counter += 1
            print(f'{str(chr(i))}{j}{str(chr(start_seat))}')
            start_seat += 1
             
    rows += 1
    
print(seats_counter)
