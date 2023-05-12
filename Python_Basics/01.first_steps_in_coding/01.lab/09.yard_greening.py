area = input()

area = float(area)

price_per_square_meter = 7.61

sum = area * price_per_square_meter

# фирмата изпълнител предлага 18% отстъпка от крайната цен
discount = sum * 18 / 100
sum = sum - discount

print(f'The final price is: {sum} lv.')
print(f'The discount is: {discount} lv.')