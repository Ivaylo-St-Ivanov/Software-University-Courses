days = int(input())
hours = int(input())

#  За всеки четен ден и нечетен час, паркингът таксува 2.50 лева.
fee_for_even_day_and_odd_hour = 2.50
#  Във всеки нечетен ден и четен час таксата е 1.25 лева
fee_for_odd_day_and_even_hour = 1.25
#  Във всички останали случаи се заплаща 1 лев.
fee_for_other_case = 1

total = 0

for i in range(1, days + 1):
    current_day_fee = 0
    for j in range(1, hours + 1):
        if i % 2 == 0 and j % 2 != 0:
            current_day_fee += fee_for_even_day_and_odd_hour
        elif i % 2 != 0 and j % 2 == 0:
            current_day_fee += fee_for_odd_day_and_even_hour
        else:
            current_day_fee += fee_for_other_case
            
    total += current_day_fee
    print(f'Day: {i} - {current_day_fee:.2f} leva')

print(f'Total: {total:.2f} leva')
