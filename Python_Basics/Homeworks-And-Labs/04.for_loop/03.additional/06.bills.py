bill_for_water = 20
bill_For_net = 15

period = int(input())

total_bill_for_water = bill_for_water * period
total_bill_For_net = bill_For_net * period
total_bill_for_electricity = 0
total_another_bills = 0

for i in range(period):
    current_bill_for_electricity = float(input())
    total_bill_for_electricity += current_bill_for_electricity
    # • за други – събират се тока, водата и интернета за месеца и към сумата се прибавят 20%.
    total_another_bills = (total_bill_for_electricity + total_bill_for_water + total_bill_For_net) * 1.2

average_bills_per_month = (total_bill_for_electricity + total_bill_for_water + total_bill_For_net + total_another_bills) / period
print(f'Electricity: {total_bill_for_electricity:.2f} lv')
print(f'Water: {total_bill_for_water:.2f} lv')
print(f'Internet: {total_bill_For_net:.2f} lv')
print(f'Other: {total_another_bills:.2f} lv')
print(f'Average: {average_bills_per_month:.2f} lv')
