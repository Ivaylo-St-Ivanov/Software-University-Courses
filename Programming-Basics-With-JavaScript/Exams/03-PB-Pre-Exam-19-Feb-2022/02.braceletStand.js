function braceletStand(input) {

    const pocketMoneyPerDay = Number(input[0]);
    const incomePerDay = Number(input[1]);
    const costsForTheWholePeriod = Number(input[2]);
    const giftPrice = Number(input[3]);

    // Остават 5 дни до рождения ден.
    const daysToSave = 5;
    const moneySavedFromPocketMoney = daysToSave * pocketMoneyPerDay;
    const moneySavedFromSales = daysToSave * incomePerDay;
    const totalSavedMoney = moneySavedFromPocketMoney + moneySavedFromSales;
    // Трябва да се вземат предвид нейните разходи.
    const remainingMoney = totalSavedMoney - costsForTheWholePeriod;

    if (remainingMoney >= giftPrice) {
        console.log(`Profit: ${remainingMoney.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        const difference = giftPrice - remainingMoney;
        console.log(`Insufficient money: ${difference.toFixed(2)} BGN.`);
    }
}
braceletStand(["5.12",
    "32.05",
    "15",
    "150"]);