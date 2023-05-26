width = int(input())
length = int(input())

#  Бележка: Едно парче торта е с размер 1х1 см.
number_of_pieces = width * length
current = input()
counter_pieces = 0

while current != "STOP":
    current_pieces = int(current)
    counter_pieces += current_pieces
    if counter_pieces >= number_of_pieces:
        break
        
    current = input()
    
difference = abs(number_of_pieces - counter_pieces)
if number_of_pieces > counter_pieces:
    print(f'{difference} pieces are left.')
else:
    print(f'No more cake left! You need {difference} pieces more.')
