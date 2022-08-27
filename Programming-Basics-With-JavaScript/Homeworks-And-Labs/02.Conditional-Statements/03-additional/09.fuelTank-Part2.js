function fuelTankPart2(input) {

    const gasolinePrice = 2.22;
    const dieselPrice = 2.33;
    const gasPrice = 0.93;
    const discountGasolinePerLiter = 0.18;
    const discountDieselPerLiter = 0.12;
    const discountGasPerLiter = 0.08;

    const fuel = input[0];
    const liters = Number(input[1]);
    const discountCard = input[2];

    let price = 0;

    if (discountCard === "Yes") {
        switch (fuel) {
            case "Gas": price = liters * gasPrice - liters * discountGasPerLiter; break;
            case "Gasoline": price = liters * gasolinePrice - liters * discountGasolinePerLiter; break;
            case "Diesel": price = liters * dieselPrice - liters * discountDieselPerLiter; break;
        }
    } else {
        switch (fuel) {
            case "Gas": price = liters * gasPrice; break;
            case "Gasoline": price = liters * gasolinePrice; break;
            case "Diesel": price = liters * dieselPrice; break;
        }
    }

    // Ако шофьора е заредил между 20 и 25 литра включително, той получава 8 процента отстъпка от крайната цена,
    // при повече от 25 литра гориво, той получава 10 процента отстъпка от крайната цена.
    if (liters >= 20 && liters <= 25) {
        price *= 0.92;
    } else if (liters > 25) {
        price *= 0.9;
    }

    console.log(price.toFixed(2) + " lv.");
}
fuelTankPart2(["Diesel", "19", "No"]);