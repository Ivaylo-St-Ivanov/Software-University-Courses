function courierExpress(input) {

    const shipmentWeight = Number(input[0]);
    const typeOfService = input[1];
    const distance = Number(input[2]);

    // standard price -> sp
    const spUntil1kgPerKm = 0.03;
    const spFrom1To10kgPerKm = 0.05;
    const spFrom10To40kgPerKm = 0.10;
    const spFrom40To90kgPerKm = 0.15;
    const spFrom90To150kgPerKm = 0.20;
    // express price -> ep
    const epUntil1kgPerKm = spUntil1kgPerKm + (shipmentWeight * (spUntil1kgPerKm * 0.8));
    const epFrom1To10kgPerKm = spFrom1To10kgPerKm + (shipmentWeight * (spFrom1To10kgPerKm * 0.4));
    const epFrom10To40kgPerKm = spFrom10To40kgPerKm + (shipmentWeight * (spFrom10To40kgPerKm * 0.05));
    const epFrom40To90kgPerKm = spFrom40To90kgPerKm + (shipmentWeight * (spFrom40To90kgPerKm * 0.02));
    const epFrom90To150kgPerKm = spFrom90To150kgPerKm + (shipmentWeight * (spFrom90To150kgPerKm * 0.01));

    let price = distance;

    switch (typeOfService) {
        case "standard":
            if (shipmentWeight >= 90 && shipmentWeight < 150) {
                price *= spFrom90To150kgPerKm;
            } else if (shipmentWeight >= 40) {
                price *= spFrom40To90kgPerKm;
            } else if (shipmentWeight >= 10) {
                price *= spFrom10To40kgPerKm;
            } else if (shipmentWeight >= 1) {
                price *= spFrom1To10kgPerKm;
            } else if (shipmentWeight < 1) {
                price *= spUntil1kgPerKm;
            }
            break;
        case "express":
            if (shipmentWeight >= 90 && shipmentWeight < 150) {
                price *= epFrom90To150kgPerKm;
            } else if (shipmentWeight >= 40) {
                price *= epFrom40To90kgPerKm;
            } else if (shipmentWeight >= 10) {
                price *= epFrom10To40kgPerKm;
            } else if (shipmentWeight >= 1) {
                price *= epFrom1To10kgPerKm;
            } else if (shipmentWeight < 1) {
                price *= epUntil1kgPerKm;
            }
            break;
    }

    console.log(`The delivery of your shipment with weight of ${shipmentWeight.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
}
courierExpress(["87",
    "express",
    "130"]);