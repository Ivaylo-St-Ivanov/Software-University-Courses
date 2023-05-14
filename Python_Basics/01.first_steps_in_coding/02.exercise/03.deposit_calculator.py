deposited_amount = float(input())
term = int(input())
annual_interest_rate = float(input())

sum = deposited_amount + term * ((deposited_amount * (annual_interest_rate / 100)) / 12)

print(sum)