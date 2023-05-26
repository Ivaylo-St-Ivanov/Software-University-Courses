width_free_space = int(input())
length_free_space = int(input())
hight_free_space = int(input())
volume_free_space = width_free_space * length_free_space * hight_free_space

current = input()
filled_space = 0
is_have_free_space = True

while current != "Done":
    current_boxes = int(current)
    #  Бележка: Един кашон е с точни размери: 1m. x 1m. x 1m.
    filled_space += current_boxes
    if filled_space >= volume_free_space:
        is_have_free_space = False
        break
        
    current = input()

difference = abs(volume_free_space - filled_space)
if not is_have_free_space:
    print(f'No more free space! You need {difference} Cubic meters more.')
else:
    print(f'{difference} Cubic meters left.')
