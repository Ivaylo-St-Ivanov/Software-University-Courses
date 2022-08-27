function transportPrice(input) {

    const startPriceTaxi = 0.70;
    const dailyRateTaxiPerKm = 0.79;
    const nightRateTaxiPerKm = 0.90;
    const busRatePerKm = 0.09;
    const trainRatePerKm = 0.06;

    const nKm = Number(input[0]);
    const dayOrNight = input[1];

    let price = 0;

    if (nKm >= 100) {
        price = trainRatePerKm * nKm;
    } else if (nKm >= 20) {
        price = busRatePerKm * nKm;
    } else if (nKm < 20 && dayOrNight === "day") {
        price = startPriceTaxi + dailyRateTaxiPerKm * nKm;
    } else {
        price = startPriceTaxi + nightRateTaxiPerKm * nKm;
    }

    console.log(price.toFixed(2));
}
transportPrice(["25", "day"]);