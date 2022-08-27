function dishwasher(input) {

    // Знае се, че всяка бутилка съдържа 750 мл. препарат, за 1 чиния са нужни 5 мл., а за тенджера 15 мл.
    const detergentBottle = 750;
    const neededDetergentPerPlate = 5;
    const neededDetergentPerPot = 15;

    const detergentBottlesCount = Number(input[0]);
    let index = 1;
    let current = input[index++];
    let loading = 0;
    let counterPlates = 0;
    let counterPots = 0;
    let totalDetergent = detergentBottle * detergentBottlesCount;
    let isDetergentEnough = true;

    while (current !== "End") {
        let currentDishes = Number(current);
        loading++;
        // Приемете, че на всяко трето зареждане със съдове, съдомиялната се пълни само с тенджери, а останалите пъти с чинии.
        if (loading % 3 === 0) {
            counterPots += currentDishes;
            totalDetergent -= currentDishes * neededDetergentPerPot;
        } else {
            counterPlates += currentDishes;
            totalDetergent -= currentDishes * neededDetergentPerPlate;
        }

        if (totalDetergent < 0) {
            isDetergentEnough = false;
            break;
        }

        current = input[index++];
    }

    if (isDetergentEnough) {
        console.log("Detergent was enough!");
        console.log(`${counterPlates} dishes and ${counterPots} pots were washed.`);
        console.log(`Leftover detergent ${totalDetergent} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(totalDetergent)} ml. more necessary!`);
    }
}
dishwasher(["1", "10", "15", "10", "12", "13", "30"]);