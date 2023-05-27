current = input()

destination = ""
savings = 0

while current != "End":
    destination = current
    budget = float(input())
    while savings <= budget:
        currentSum = float(input())
        savings += currentSum
        if savings >= budget:
            print(f'Going to {destination}!')
            savings = 0
            break
            
    current = input()
