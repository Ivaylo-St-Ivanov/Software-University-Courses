function godzillaVsKong(input) {

    const budget = Number(input[0]);
    const numberOfSupernumerary = Number(input[1]);
    const clothingPriceForOne = Number(input[2]);

    const decor = budget * 0.1;
    let clothingPrice = numberOfSupernumerary * clothingPriceForOne;

    if (numberOfSupernumerary > 150) {
        clothingPrice = clothingPrice - clothingPrice * 0.1;
    }

    const costs = decor + clothingPrice;
    const difference = Math.abs(budget - costs);

    if (costs > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${difference.toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`);
    }

}
godzillaVsKong(["20000", "120", "55.5"]);