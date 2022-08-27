function computerFirm(input) {

    const computersCount = Number(input[0]);
    let index = 1;

    let ratingCounter = 0;
    let salesCounter = 0;

    for (let i = 1; i <= computersCount; i++) {
        let currentNum = "" + input[index++];
        let currentRating = Number(currentNum.charAt(2));
        ratingCounter += currentRating;
        let possibleSales = currentNum.charAt(0) + currentNum.charAt(1);
        possibleSales = Number(possibleSales);
        if (currentRating === 3) {
            salesCounter += 0.5 * possibleSales;
        } else if (currentRating === 4) {
            salesCounter += 0.7 * possibleSales;
        } else if (currentRating === 5) {
            salesCounter += 0.85 * possibleSales;
        } else if (currentRating === 6) {
            salesCounter += possibleSales;
        }
    }

    const averageRating = ratingCounter / computersCount;
    console.log(salesCounter.toFixed(2));
    console.log(averageRating.toFixed(2));
}
computerFirm(["3",
    "103",
    "103",
    "103"]);