goal = 10000

current = input()
total_steps = 0

while current != "Going home":
    current_steps = int(current)
    total_steps += current_steps
    if total_steps >= goal:
        break
        
    current = input()
    
if current == "Going home":
    steps_to_home = int(input())
    total_steps += steps_to_home
    
difference = abs(total_steps - goal)
if total_steps >= goal:
    print("Goal reached! Good job!")
    print(f'{difference} steps over the goal!')
else:
    print(f'{difference} more steps to reach goal.')
