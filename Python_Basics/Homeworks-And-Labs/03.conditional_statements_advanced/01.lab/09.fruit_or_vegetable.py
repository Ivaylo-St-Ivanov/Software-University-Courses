word = input() 

output = ''

if word == "banana" or word == "apple" or word == "kiwi" or word == "cherry" or word == "lemon" or word == "grapes":
    output = 'fruit'
elif word == "tomato" or word == "cucumber" or word == "pepper" or word == "carrot":
    output = 'vegetable'
else:
    output = 'unknown'

print(output)

