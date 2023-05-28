start_value_to_first_pair = int(input())
start_value_to_second_pair = int(input())
difference_between_start_and_end_value_to_first_pair = int(input())
difference_between_start_and_end_value_to_second_pair = int(input())

endValueToFirstPair = start_value_to_first_pair + difference_between_start_and_end_value_to_first_pair
endValueToSecondPair = start_value_to_second_pair + difference_between_start_and_end_value_to_second_pair

for i in range(start_value_to_first_pair, endValueToFirstPair + 1):
    for j in range(start_value_to_second_pair, endValueToSecondPair + 1):
        if i % 2 != 0 and i % 3 != 0 and i % 5 != 0 and i % 7 != 0 and j % 2 != 0 and j % 3 != 0 and j % 5 != 0 and j % 7 != 0:
            print(f'{i}{j}')
