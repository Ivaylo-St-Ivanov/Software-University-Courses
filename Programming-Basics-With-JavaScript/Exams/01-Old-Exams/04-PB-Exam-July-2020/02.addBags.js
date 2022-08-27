function addBags(input) {

    const priceOver20kg = Number(input[0]);
    const poundsOfLuggage = Number(input[1]);
    const daysBeforeTheTrip = Number(input[2]);
    const luggageCount = Number(input[3]);

    let price = 0;

    // • до 10кг – 20% от цената на багаж над 20кг.
    // • между 10кг и 20кг вкл. – 50% от цената на багаж над 20кг.
    // • над 20кг – таксата се чете от конзолата.
    if (poundsOfLuggage > 20) {
        price = priceOver20kg;
    } else if (poundsOfLuggage > 9) {
        price = 0.5 * priceOver20kg;
    } else {
        price = 0.2 * priceOver20kg;
    }

    // • повече от 30 дни - цената на багажа се оскъпява с 10%.
    // • между 7 и 30 дни вкл. - цената на багажа се оскъпява с 15%.
    // • по-малко от 7 дни - цената на багажа се оскъпява с 40%.
    if (daysBeforeTheTrip > 30) {
        price *= 1.1;
    } else if (daysBeforeTheTrip > 6) {
        price *= 1.15;
    } else {
        price *= 1.4;
    }

    const finalPrice = price * luggageCount;
    console.log(`The total price of bags is: ${finalPrice.toFixed(2)} lv.`);
}
addBags(["30", "18", "15", "2"]);