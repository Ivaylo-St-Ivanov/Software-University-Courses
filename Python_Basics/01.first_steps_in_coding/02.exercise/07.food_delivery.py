chicken_menu_count = int(input())
fish_menu_count = int(input())
vegetarian_menu_count = int(input())

# • Пилешко меню – 10.35 лв.
# • Меню с риба – 12.40 лв.
# • Вегетарианско меню – 8.15 лв. 
chicken_menu_price = 10.35
fish_menu_price = 12.4
vegetarian_menu_price = 8.15

sum = chicken_menu_count * chicken_menu_price + fish_menu_count * fish_menu_price + vegetarian_menu_count * vegetarian_menu_price

# Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката).
desert = sum * 0.2

# Цената на доставка е 2.50 лв и се начислява най-накрая. 
sum = sum + desert + 2.5

print(sum)