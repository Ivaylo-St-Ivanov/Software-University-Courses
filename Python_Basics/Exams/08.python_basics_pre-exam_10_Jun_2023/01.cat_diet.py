# • 1 грам мазнини = 9 калории
# • 1 грам протеини = 4 калории
# • 1 грам въглехидрати = 4 калории
gram_of_fats = 9
gram_of_protein = 4
gram_of_carbohydrates = 4

percentage_of_fats = int(input())
percentage_of_protein = int(input())
percentage_of_carbohydrates = int(input())
total_calories = int(input())
percentage_of_water = int(input())

fats = total_calories * (percentage_of_fats / 100) / gram_of_fats
protein = total_calories * (percentage_of_protein / 100) / gram_of_protein
carbohydrates = total_calories * (percentage_of_carbohydrates / 100) / gram_of_carbohydrates

total_weight = fats + protein + carbohydrates
calories_per_gram = total_calories / total_weight

result = calories_per_gram * ((100 - percentage_of_water) / 100)

print(f'{result:.4f}')
