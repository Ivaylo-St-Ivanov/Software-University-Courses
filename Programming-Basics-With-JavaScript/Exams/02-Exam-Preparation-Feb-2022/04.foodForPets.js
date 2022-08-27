function foodForPets(input) {

    const period = Number(input[0]);
    const foodQuantityForPeriod = Number(input[1]);
    let index = 2;

    let biscuitsQuantity = 0;
    let foodQuantityCounter = 0;
    let dogsFoodCounter = 0;
    let catsFoodCounter = 0;

    for (let i = 1; i <= period; i++) {
        let foodEatenByDogForCurrentDay = Number(input[index++]);
        let foodEatenByCatForCurrentDay = Number(input[index++]);
        foodQuantityCounter += foodEatenByDogForCurrentDay + foodEatenByCatForCurrentDay;
        dogsFoodCounter += foodEatenByDogForCurrentDay;
        catsFoodCounter += foodEatenByCatForCurrentDay;
        // На всеки трети ден получават награда - бисквитки.
        if (i % 3 === 0) {
            // Количеството на бисквитките е 10% от общо изядената храна за деня.
            biscuitsQuantity += 0.1 * (foodEatenByDogForCurrentDay + foodEatenByCatForCurrentDay);
        }
    }

    const eatenFoodPercentage = foodQuantityCounter / foodQuantityForPeriod * 100;
    const dogEatenFoodPercentage = dogsFoodCounter / foodQuantityCounter * 100;
    const catEatenFoodPercentage = catsFoodCounter / foodQuantityCounter * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuitsQuantity)}gr.`);
    console.log(`${eatenFoodPercentage.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogEatenFoodPercentage.toFixed(2)}% eaten from the dog.`);
    console.log(`${catEatenFoodPercentage.toFixed(2)}% eaten from the cat.`);
}
foodForPets(["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"]);