function backToThePast(input) {

    let age = 18;
    const initialYear = 1800;
    const costPerYear = 12000;

    const inheriredMoney = Number(input[0]);
    const endYear = Number(input[1]);

    let moneyNeeded = 0;

    for (let i = initialYear; i <= endYear; i++) {
        if (i % 2 === 0) {
            moneyNeeded += costPerYear;
        } else {
            moneyNeeded += costPerYear + 50 * age;
        }

        age += 1;
    }

    const difference = Math.abs(inheriredMoney - moneyNeeded).toFixed(2);
    if (moneyNeeded <= inheriredMoney) {
        console.log(`Yes! He will live a carefree life and will have ${difference} dollars left.`);
    } else {
        console.log(`He will need ${difference} dollars to survive.`);
    }
}
backToThePast(["100000.15", "1808"]);