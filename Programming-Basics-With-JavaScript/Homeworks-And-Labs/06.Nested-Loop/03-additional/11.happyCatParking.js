function happyCatParking(input) {

    let days = Number(input[0]);
    let hours = Number(input[1]);

    // За всеки четен ден и нечетен час, паркингът таксува 2.50 лева.
    let feeForEvenDayAndOddHour = 2.50;
    // Във всеки нечетен ден и четен час таксата е 1.25 лева
    let feeForOddDayAndEvenHour = 1.25;
    // Във всички останали случаи се заплаща 1 лев.
    let feeForOtherCase = 1;

    let total = 0;

    for (let i = 1; i <= days; i++) {
        let currentDayFee = 0;
        for (let j = 1; j <= hours; j++) {
            if (i % 2 == 0 && j % 2 != 0) {
                currentDayFee += feeForEvenDayAndOddHour;
            } else if (i % 2 != 0 && j % 2 == 0) {
                currentDayFee += feeForOddDayAndEvenHour;
            } else {
                currentDayFee += feeForOtherCase;
            }
        }
        total += currentDayFee;
        console.log(`Day: ${i} - ${currentDayFee.toFixed(2)} leva`);
    }

    console.log(`Total: ${total.toFixed(2)} leva`);
}
happyCatParking(['5', '2']);