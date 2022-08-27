function fishingBoat(input) {

    const springPrice = 3000;
    const summerPrice = 4200;
    const autumnPrice = 4200;
    const winterPrice = 2600;

    const budget = Number(input[0]);
    const season = input[1];
    const fishermen = Number(input[2]);

    let finalPrice = 0;

    switch (season) {
        case "Spring": finalPrice = springPrice; break;
        case "Summer": finalPrice = summerPrice; break;
        case "Autumn": finalPrice = autumnPrice; break;
        case "Winter": finalPrice = winterPrice; break;
    }

    if (fishermen <= 6) {
        finalPrice *= 0.90;
    } else if (fishermen > 6 && fishermen <= 11) {
        finalPrice *= 0.85;
    } else if (fishermen > 11) {
        finalPrice *= 0.75;
    }

    if (fishermen % 2 === 0 && season !== "Autumn") {
        finalPrice *= 0.95;
    }

    const difference = Math.abs(budget - finalPrice).toFixed(2);

    if (budget >= finalPrice) {
        console.log(`Yes! You have ${difference} leva left.`);
    } else {
        console.log(`Not enough money! You need ${difference} leva.`);
    }
}
fishingBoat(["2000", "Winter", "13"]);