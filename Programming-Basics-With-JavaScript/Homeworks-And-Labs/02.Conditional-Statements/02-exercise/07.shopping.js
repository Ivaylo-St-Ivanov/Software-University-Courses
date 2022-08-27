function shopping(input) {

    const budget = Number(input[0]);
    const videoCardsCount = Number(input[1]);
    const processorsCount = Number(input[2]);
    const ramMemoryCount = Number(input[3]);

    const oneVideoCardPrice = 250;
    const videoCardsPrice = videoCardsCount * oneVideoCardPrice;
    const processorsPrice = processorsCount * (videoCardsPrice * 0.35);
    const ramMemoryPrice = ramMemoryCount * (videoCardsPrice * 0.1);
    let totalPrice = videoCardsPrice + processorsPrice + ramMemoryPrice;

    if (videoCardsCount > processorsCount) {
        totalPrice *= 0.85;
    }

    const difference = Math.abs(budget - totalPrice);

    if (budget >= totalPrice) {
        console.log(`You have ${difference.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva more!`);
    }

}
shopping(["900", "2", "1", "3"]);