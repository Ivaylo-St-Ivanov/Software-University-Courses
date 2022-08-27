function fruitMarket(input) {

    const strawberryPrice = Number(input[0]);
    const bananasQuantity = Number(input[1]);
    const orangesQuantity = Number(input[2]);
    const raspberriesQuantity = Number(input[3]);
    const strawberriesQuantity = Number(input[4]);

    // • цената на малините е на половина по-ниска от тази на ягодите.
    const raspberriesPrice = strawberryPrice / 2;
    // • цената на портокалите е с 40% по-ниска от цената на малините.
    const orangesPrice = raspberriesPrice * 0.6;
    // • цената на бананите е с 80% по-ниска от цената на малините.
    const bananasPrice = raspberriesPrice * 0.2;

    const bananasCosts = bananasQuantity * bananasPrice;
    const orangesCosts = orangesQuantity * orangesPrice;
    const raspberriesCosts = raspberriesQuantity * raspberriesPrice;
    const strawberriesCosts = strawberriesQuantity * strawberryPrice;
    const totalCosts = bananasCosts + orangesCosts + raspberriesCosts + strawberriesCosts;

    console.log(totalCosts.toFixed(2));
}
fruitMarket(["48",
    "10",
    "3.3",
    "6.5",
    "1.7"]);