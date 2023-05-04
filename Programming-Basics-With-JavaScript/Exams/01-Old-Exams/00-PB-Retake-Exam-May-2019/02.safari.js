function safari(input) {

    // • Цената на един литър гориво е 2.10 лв.
    // • Цената за екскурзовод е 100лв.

    const fuelPrice = 2.10;
    const tourGuide = 100;

    const budget = Number(input[0]);
    const neededFuel = Number(input[1]);
    const day = input[2];

    let sum = fuelPrice * neededFuel + tourGuide;

    // • В зависимост от деня има отстъпки от общата цена - за събота 10%, а за неделя 20%
    switch (day) {
        case 'Saturday': sum *= 0.9; break;
        case 'Sunday': sum *= 0.8; break;
    }
    
    const difference = Math.abs(budget - sum);

    if (budget > sum) {
        console.log(`Safari time! Money left: ${difference.toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${difference.toFixed(2)} lv.`);
    }
}

safari(['1000', '10', 'Sunday']);