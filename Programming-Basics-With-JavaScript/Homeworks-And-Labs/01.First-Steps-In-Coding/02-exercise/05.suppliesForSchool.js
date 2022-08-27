function suppliesForSchool(input) {

    const packageOfPens = Number(input[0]);
    const packageOfMarkers = Number(input[1]);
    const preparation = Number(input[2]);
    const discount = Number(input[3]);

    const priceOfPens = packageOfPens * 5.8;
    const priceOfMarkers = packageOfMarkers * 7.2;
    const priceOfPreparation = preparation * 1.2;
    const sum = priceOfPens + priceOfMarkers + priceOfPreparation;
    const totalSum = sum - (sum * (discount / 100));
    console.log(totalSum);

}
suppliesForSchool(["4", "2", "5", "13"]);