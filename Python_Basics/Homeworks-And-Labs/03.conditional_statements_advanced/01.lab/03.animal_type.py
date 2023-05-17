animal = input()

if animal == 'crocodile' or animal == 'tortoise' or animal == 'snake':
    output = 'reptile'
elif animal == 'dog':
    output = 'mammal'
else:
    output = 'unknown'

print(output)