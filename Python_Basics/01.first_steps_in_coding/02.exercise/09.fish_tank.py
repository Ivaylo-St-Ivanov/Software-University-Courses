length = int(input())
width = int(input())
height = int(input())
percent = float(input())

capacity = length * width * height
# Един литър вода се равнява на един кубичен дециметър/ 1л=1 дм3/. 
capacity_in_litters = capacity / 1000
capacity_in_litters -= capacity_in_litters * (percent / 100)

print(capacity_in_litters)
