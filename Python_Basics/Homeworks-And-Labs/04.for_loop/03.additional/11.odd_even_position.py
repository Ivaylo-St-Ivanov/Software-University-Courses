from sys import maxsize

num_count = int(input())

odd_sum = 0
odd_min = maxsize
odd_max = -maxsize
even_sum = 0
even_min = maxsize
even_max = -maxsize

for i in range(1, num_count + 1):
    current_num = float(input())
    if i % 2 != 0:
        odd_sum += current_num
        if current_num < odd_min:
            odd_min = current_num
        if current_num > odd_max:
            odd_max = current_num
    else:
        even_sum += current_num
        if current_num < even_min:
            even_min = current_num
        if current_num > even_max:
            even_max = current_num
            
print(f'OddSum={odd_sum:.2f},')
if odd_min == maxsize:
    print("OddMin=No,")
else:
    print(f"OddMin={odd_min:.2f},")
if odd_max == -maxsize:
    print("OddMax=No,")
else:
    print(f"OddMax={odd_max:.2f},")
print(f"EvenSum={even_sum:.2f},")
if even_min == maxsize:
    print("EvenMin=No,")
else:
    print(f"EvenMin={even_min:.2f},")
if even_max == -maxsize:
    print("EvenMax=No")
else:
    print(f"EvenMax={even_max:.2f}")
