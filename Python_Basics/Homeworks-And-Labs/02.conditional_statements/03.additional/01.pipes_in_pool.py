v = int(input())
p1 = int(input())
p2 = int(input())
h = float(input())

waterFromP1 = p1 * h
waterFromP2 = p2 * h
waterInPool = waterFromP1 + waterFromP2
p1Percentage = waterFromP1 / waterInPool * 100
p2Percentage = waterFromP2 / waterInPool * 100
percentageFromPool = waterInPool / v * 100

if waterInPool <= v:
    print(f'The pool is {percentageFromPool}% full. Pipe 1: {p1Percentage:.2f}%. Pipe 2: {p2Percentage:.2f}%.')
else:
    extraWater = waterInPool - v
    print(f'For {h:.2f} hours the pool overflows with {extraWater:.2f} liters.')
