function logistics(input) {

    const minibusPricePerTon = 200;     // • До 3 тона – микробус (200 лева на тон)
    const truckPricePerTon = 175;       // • От 4 до 11 тона – камион (175 лева на тон)
    const tarinPricePerTon = 120;       // • 12 и повече тона – влак (120 лева на тон)

    const goodsCount = Number(input[0]);
    let index = 1;

    let minibusTonnageCounter = 0;
    let truckTonnageCounter = 0;
    let trainTonnageCounter = 0;
    let totalPrice = 0;

    for (let i = 1; i <= goodsCount; i++) {
        let currentTonnage = Number(input[index++]);
        if (currentTonnage > 11) {
            trainTonnageCounter += currentTonnage;
            totalPrice += currentTonnage * tarinPricePerTon;
        } else if (currentTonnage > 3) {
            truckTonnageCounter += currentTonnage;
            totalPrice += currentTonnage * truckPricePerTon;
        } else {
            minibusTonnageCounter += currentTonnage;
            totalPrice += currentTonnage * minibusPricePerTon;
        }
    }

    const totalTonnage = minibusTonnageCounter + truckTonnageCounter + trainTonnageCounter;
    const averagePricePerTon = totalPrice / totalTonnage;
    const minibusPercentageTonnage = minibusTonnageCounter / totalTonnage * 100;
    const truckPercentageTonnage = truckTonnageCounter / totalTonnage * 100;
    const trainPercentageTonnage = trainTonnageCounter / totalTonnage * 100;

    console.log(averagePricePerTon.toFixed(2));
    console.log(minibusPercentageTonnage.toFixed(2) + "%");
    console.log(truckPercentageTonnage.toFixed(2) + "%");
    console.log(trainPercentageTonnage.toFixed(2) + "%");
}
logistics(["5", "2", "10", "20", "1","7"]);