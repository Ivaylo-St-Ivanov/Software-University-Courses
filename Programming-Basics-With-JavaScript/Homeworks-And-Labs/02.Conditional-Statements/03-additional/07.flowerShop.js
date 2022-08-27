function flowerShop(input) {

    const magnoliasPrice = 3.25;
    const hyacinthsPrice = 4.00;
    const rosesPrice = 3.50;
    const cactusPrice = 8.00;

    const magnoliasCount = Number(input[0]);
    const hyacinthsCount = Number(input[1]);
    const rosesCount = Number(input[2]);
    const cactusCount = Number(input[3]);
    const giftPrice = Number(input[4]);

    const orderPrice = magnoliasCount * magnoliasPrice + hyacinthsCount * hyacinthsPrice + rosesCount * rosesPrice + cactusCount * cactusPrice;
    // От общата сума, Мария трябва да плати 5% данъци.
    const profit = orderPrice * 0.95;
    const difference = Math.abs(profit - giftPrice);

    if (profit >= giftPrice) {
        console.log(`She is left with ${Math.floor(difference)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(difference)} leva.`);
    }
}
flowerShop(["15", "7", "5", "10", "100"]);