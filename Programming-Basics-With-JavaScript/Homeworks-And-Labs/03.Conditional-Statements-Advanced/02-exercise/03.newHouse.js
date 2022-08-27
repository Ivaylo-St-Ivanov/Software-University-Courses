function newHouse(input) {

    const rosesPrice = 5.00;
    const dahliasPrice = 3.80;
    const tulipsPrice = 2.80;
    const narcissusPrice = 3.00;
    const gladiolusPrice = 2.50;

    const kindOfFlowers = input[0];
    const flowersCount = Number(input[1]);
    const budget = Number(input[2]);

    let finalPrice = 0;

    switch (kindOfFlowers) {
        case "Roses": finalPrice = flowersCount * rosesPrice;
            if (flowersCount > 80) {
                finalPrice *= 0.90;
            }
            break;
        case "Dahlias": finalPrice = flowersCount * dahliasPrice;
            if (flowersCount > 90) {
                finalPrice *= 0.85;
            }
            break;
        case "Tulips": finalPrice = flowersCount * tulipsPrice;
            if (flowersCount > 80) {
                finalPrice *= 0.85;
            }
            break;
        case "Narcissus": finalPrice = flowersCount * narcissusPrice;
            if (flowersCount < 120) {
                finalPrice *= 1.15;
            }
            break;
        case "Gladiolus": finalPrice = flowersCount * gladiolusPrice;
            if (flowersCount < 80) {
                finalPrice *= 1.20;
            }
            break;
    }

    const difference = Math.abs(budget - finalPrice).toFixed(2);

    if (budget >= finalPrice) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${kindOfFlowers} and ${difference} leva left.`);
    } else {
        console.log(`Not enough money, you need ${difference} leva more.`);
    }
}
newHouse(["Tulips", "88", "260"]);