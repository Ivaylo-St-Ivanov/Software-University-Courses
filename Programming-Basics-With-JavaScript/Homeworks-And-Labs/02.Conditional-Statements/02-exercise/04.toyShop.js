function toyShop(input) {

    const puzzlePrice = 2.60;
    const dollPrice = 3;
    const teddyBearPrice = 4.10;
    const minionPrice = 8.20;
    const truckPrice = 2;

    const tripPrice = Number(input[0]);
    const numberOfPuzzles = Number(input[1]);
    const numberOfDolls = Number(input[2]);
    const numberOfTeddyBears = Number(input[3]);
    const numberOfMinions = Number(input[4]);
    const numberOfTrucks = Number(input[5]);

    const numberOfAllToys = numberOfPuzzles + numberOfDolls + numberOfTeddyBears + numberOfMinions + numberOfTrucks;
    let allToysPrice = numberOfPuzzles * puzzlePrice + numberOfDolls * dollPrice + numberOfTeddyBears * teddyBearPrice + numberOfMinions * minionPrice + numberOfTrucks * truckPrice;

    if (numberOfAllToys >= 50) {
        allToysPrice = allToysPrice - allToysPrice * 0.25;
    }

    const profit = allToysPrice - allToysPrice * 0.1;
    const difference = Math.abs(profit - tripPrice);

    if (profit >= tripPrice) {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
    }

}
toyShop(["40.8", "20", "25", "30", "50", "10"]);