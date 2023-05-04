function fruitMarket(input) {

    const strawberryPrice = Number(input[0]);
    const bananasQuantity = Number(input[1]);
    const orangesQuantity = Number(input[2]);
    const raspberryQuantity = Number(input[3]);
    const strawberryQuantity = Number(input[4]);

    // • цената на малините е на половина по - ниска от тази на ягодите;
    // • цената на портокалите е с 40 % по - ниска от цената на малините;
    // • цената на бананите е с 80 % по - ниска от цената на малините.

    const raspberryPrice = strawberryPrice / 2;
    const orangesPrice = raspberryPrice * 0.6;
    const bananasPrice = raspberryPrice * 0.2;

    const neededMoney = strawberryPrice * strawberryQuantity + bananasPrice * bananasQuantity + orangesPrice * orangesQuantity + raspberryPrice * raspberryQuantity;

    console.log(neededMoney.toFixed(2));
}

fruitMarket(['63.5',
    '3.57',
    '6.35',
    '8.15',
    '2.5']);
    
    
    