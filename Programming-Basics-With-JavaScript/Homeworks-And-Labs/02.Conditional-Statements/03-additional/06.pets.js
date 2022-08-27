function pets(input) {

    const days = Number(input[0]);
    const foodInKg = Number(input[1]);
    const dogFoodPerDayInKg = Number(input[2]);
    const catFoodPerDayInKg = Number(input[3]);
    const turtleFoodPerDayInGr = Number(input[4]);

    const turtleFoodPerDayInKg = turtleFoodPerDayInGr / 1000;
    const neededFood = days * (dogFoodPerDayInKg + catFoodPerDayInKg + turtleFoodPerDayInKg);
    const difference = Math.abs(foodInKg - neededFood);

    if (foodInKg >= neededFood) {
        console.log(`${Math.floor(difference)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(difference)} more kilos of food are needed.`)
    }
}
pets(["2", "10", "1", "1", "1200"]);