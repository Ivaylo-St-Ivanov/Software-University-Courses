age = 18
initial_year = 1800
cost_per_year = 12000

inherited_money = float(input())
end_year = int(input())

money_needed = 0

for year in range(initial_year, end_year + 1):
    if year % 2 == 0:
        money_needed += cost_per_year
    else:
        money_needed += cost_per_year + 50 * age
    age += 1

difference = abs(inherited_money - money_needed)
if money_needed <= inherited_money:
    print(f'Yes! He will live a carefree life and will have {difference:.2f} dollars left.')
else:
    print(f'He will need {difference:.2f} dollars to survive.')
