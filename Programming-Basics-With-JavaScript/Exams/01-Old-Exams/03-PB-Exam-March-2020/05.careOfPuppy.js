function careOfPuppy(input) {

    const foodQuantityInKg = Number(input[0]);
    let index = 1;
    let current = input[index++];

    const foodQuantityInGrams = foodQuantityInKg * 1000;
    let eatenFoodInGrams = 0;

    while (current !== "Adopted") {
        let currentServing = Number(current);
        eatenFoodInGrams += currentServing;
        current = input[index++];
    }

    const difference = Math.abs(foodQuantityInGrams - eatenFoodInGrams)
    if (foodQuantityInGrams >= eatenFoodInGrams) {
        console.log(`Food is enough! Leftovers: ${difference} grams.`);
    } else {
        console.log(`Food is not enough. You need ${difference} grams more.`);
    }
}
careOfPuppy(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"]);