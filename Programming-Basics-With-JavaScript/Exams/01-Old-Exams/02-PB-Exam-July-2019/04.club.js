function club(input) {

    const target = Number(input[0]);
    let index = 1;
    let current = input[index++];

    let income = 0;

    while (current !== "Party!") {
        let currentOrder = Number(input[index++]);
        let price = current.length;
        let currentSum = currentOrder * price;
        if (currentSum % 2 !== 0) {
            currentSum *= 0.75;
        }
        income += currentSum;
        if (income >= target) {
            break;
        }

        current = input[index++];
    }

    if (income < target) {
        console.log(`We need ${(target - income).toFixed(2)} leva more.`);
    } else {
        console.log("Target acquired.");
    }

    console.log(`Club income - ${income.toFixed(2)} leva.`);
}
club(["500",
    "Bellini",
    "6",
    "Bamboo",
    "7",
    "Party!"]);