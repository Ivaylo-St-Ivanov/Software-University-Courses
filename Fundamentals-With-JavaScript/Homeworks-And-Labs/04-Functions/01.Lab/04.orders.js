function orders(product, quantity) {

    let coffeePrice = 1.50;
    let waterPrice = 1.00;
    let cokePrice = 1.40;
    let snacksPrice = 2.00;

    let sum = 0;

    switch (product) {
        case 'coffee': sum = quantity * coffeePrice; break;
        case 'water': sum = quantity * waterPrice; break;
        case 'coke': sum = quantity * cokePrice; break;
        case 'snacks': sum = quantity * snacksPrice; break;
    }

    console.log(sum.toFixed(2));
}
orders('water', 5);