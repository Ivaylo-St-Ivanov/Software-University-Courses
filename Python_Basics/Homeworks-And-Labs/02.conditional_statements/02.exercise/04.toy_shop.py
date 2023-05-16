puzzlePrice = 2.60
dollPrice = 3
teddyBearPrice = 4.10
minionPrice = 8.20
truckPrice = 2

tripPrice = float(input())
numberOfPuzzles = int(input())
numberOfDolls = int(input())
numberOfTeddyBears = int(input())
numberOfMinions = int(input())
numberOfTrucks = int(input())

numberOfAllToys = numberOfPuzzles + numberOfDolls + numberOfTeddyBears + numberOfMinions + numberOfTrucks
allToysPrice = numberOfPuzzles * puzzlePrice + numberOfDolls * dollPrice + numberOfTeddyBears * teddyBearPrice + numberOfMinions * minionPrice + numberOfTrucks * truckPrice

if numberOfAllToys >= 50:
    allToysPrice = allToysPrice - allToysPrice * 0.25

profit = allToysPrice - allToysPrice * 0.1
difference = abs(profit - tripPrice)

if profit >= tripPrice:
    print(f'Yes! {difference:.2f} lv left.')
else:
    print(f'Not enough money! {difference:.2f} lv needed.')