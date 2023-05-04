function touristShop(input) {

    const budget = Number(input[0]);
    let index = 1;
    let current = input[index++];

    let sum = 0;
    let count = 0;
    let balance = budget;
    let isEnough = true;

    while (current != 'Stop') {
        const product = current;
        let price = Number(input[index++]);

        if (price > balance) {
            console.log("You don't have enough money!");
            console.log(`You need ${Math.abs(balance - price).toFixed(2)} leva!`);
            isEnough = false;
            break;
        }

        count++;

        // Всеки трети продукт е на половин цена.

        if (count % 3 == 0) {
            price /= 2;
        }

        sum += price;
        balance -= price;

        current = input[index++];
    }

    if (isEnough && count > 0) {
        console.log(`You bought ${count} products for ${sum.toFixed(2)} leva.`);
    }
}

touristShop(['54',
    'Thermal underwear',
    '24',
    'Sunscreen',
    '45']);