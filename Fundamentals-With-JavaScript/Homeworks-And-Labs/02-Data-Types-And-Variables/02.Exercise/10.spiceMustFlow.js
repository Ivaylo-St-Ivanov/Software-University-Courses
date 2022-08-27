function spiceMustFlow(startingYieldOfTheSource) {

    let daysCounter = 0;
    let totalAmount = 0;
    let yieldCounter = startingYieldOfTheSource;

    while (yieldCounter >= 100) {
        daysCounter++;
        if (daysCounter === 1) {
            totalAmount = startingYieldOfTheSource;
        } else {
            totalAmount += yieldCounter;
        }
        // After it has been mined for a day, the yield drops by 10, meaning on the second day
        //  it’ll produce 10 less spice than on the first, on the third day 10 less than on the second, and so on.
        yieldCounter -= 10;
        // The mining crew consumes 26 spices every day at the end of their shift
        //  and an additional 26 after the mine has been exhausted.
        totalAmount -= 26;
        if (totalAmount < 26) {
            totalAmount = 0;
        }
    }
    totalAmount -= 26;
    if (totalAmount < 26) {
        totalAmount = 0;
    }

    console.log(daysCounter);
    console.log(totalAmount);
}
spiceMustFlow(450);