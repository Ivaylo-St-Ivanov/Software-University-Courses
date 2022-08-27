function bitcoinMining(input) {

    let oneBitcoin = 11949.16;
    let oneGramOfGold = 67.51;
    let amountOfGold = 0;
    let inputLength = input.length;
    let boughtBitcoin = 0;
    let dayOfFirstPurchased = 0;
    let days = 0;

    for (let i = 0; i < inputLength; i++) {
        days++;
        let gramsOfGoldForCurrentDay = input[i];
        if (days % 3 == 0) {
            gramsOfGoldForCurrentDay *= 0.7;
        }
        amountOfGold += gramsOfGoldForCurrentDay * oneGramOfGold;
        if (dayOfFirstPurchased == 0 && amountOfGold > oneBitcoin) {
            dayOfFirstPurchased = i + 1;
        }
        while (amountOfGold - oneBitcoin >= 0) {
            boughtBitcoin++;
            amountOfGold -= oneBitcoin;
        }
    }

    console.log(`Bought bitcoins: ${boughtBitcoin}`);
    if (dayOfFirstPurchased > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchased}`);
    }
    console.log(`Left money: ${amountOfGold.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124]);