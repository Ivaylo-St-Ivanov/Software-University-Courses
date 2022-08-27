function coffeeMachine(input) {

    const drink = input[0];
    const sugar = input[1];
    const drinksCount = Number(input[2]);

    const espressoWithoutSugarPrice = 0.90;
    const espressoWithNormalSugarPrice = 1.00;
    const espressoWithExtraSugarPrice = 1.20;
    const cappuccinoWithoutSugarPrice = 1.00;
    const cappuccinoWithNormalSugarPrice = 1.20;
    const cappuccinoWithExtraSugarPrice = 1.60;
    const teaWithoutSugarPrice = 0.50;
    const teaWithNormalSugarPrice = 0.60;
    const teaWithExtraSugarPrice = 0.70;

    let price = drinksCount;

    switch (drink) {
        case "Espresso":
            switch (sugar) {
                case "Without": price *= espressoWithoutSugarPrice;
                    // • При избрана напитка без захар има 35% отстъпка.
                    price *= 0.65;
                    break;
                case "Normal": price *= espressoWithNormalSugarPrice; break;
                case "Extra": price *= espressoWithExtraSugarPrice; break;
            }
            break;
        case "Cappuccino":
            switch (sugar) {
                case "Without": price *= cappuccinoWithoutSugarPrice;
                    // • При избрана напитка без захар има 35% отстъпка.
                    price *= 0.65;
                    break;
                case "Normal": price *= cappuccinoWithNormalSugarPrice; break;
                case "Extra": price *= cappuccinoWithExtraSugarPrice; break;
            }
            break;
        case "Tea":
            switch (sugar) {
                case "Without": price *= teaWithoutSugarPrice;
                    // • При избрана напитка без захар има 35% отстъпка.
                    price *= 0.65;
                    break;
                case "Normal": price *= teaWithNormalSugarPrice; break;
                case "Extra": price *= teaWithExtraSugarPrice; break;
            }
            break;
    }

    // • При избрана напитка "Espresso" и закупени поне 5 броя, има 25% отстъпка.
    if (drink === "Espresso" && drinksCount >= 5) {
        price *= 0.75;
    }
    // • При сума надвишава 15 лева, 20% отстъпка от крайната цена.
    if (price > 15) {
        price *= 0.8;
    }

    console.log(`You bought ${drinksCount} cups of ${drink} for ${price.toFixed(2)} lv.`);
}
coffeeMachine(["Espresso",
    "Without",
    "10"]);