#  Знае се, че всяка бутилка съдържа 750 мл. препарат, за 1 чиния са нужни 5 мл., а за тенджера 15 мл.
detergent_bottle = 750
needed_detergent_per_plate = 5
needed_detergent_per_pot = 15

detergent_bottles_count = int(input())
current = input()
loading = 0
counter_plates = 0
counter_pots = 0
total_detergent = detergent_bottle * detergent_bottles_count
is_detergent_enough = True

while current != "End":
    current_dishes = int(current)
    loading += 1
    #  Приемете, че на всяко трето зареждане със съдове, съдомиялната се пълни само с тенджери, а останалите пъти с чинии.
    if loading % 3 == 0:
        counter_pots += current_dishes
        total_detergent -= current_dishes * needed_detergent_per_pot
    else:
        counter_plates += current_dishes
        total_detergent -= current_dishes * needed_detergent_per_plate
        
    if total_detergent < 0:
        is_detergent_enough = False
        break
        
    current = input()
    
if is_detergent_enough:
    print("Detergent was enough!")
    print(f'{counter_plates} dishes and {counter_pots} pots were washed.')
    print(f'Leftover detergent {total_detergent} ml.')
else:
    print(f'Not enough detergent, {abs(total_detergent)} ml. more necessary!')
