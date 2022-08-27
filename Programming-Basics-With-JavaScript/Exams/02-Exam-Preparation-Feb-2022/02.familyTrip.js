function familyTrip(input) {

    const budget = Number(input[0]);
    const overnightStays = Number(input[1]);
    const overnightStaysPrice = Number(input[2]);
    const additionalCostsPercentage = Number(input[3]);

    let price = overnightStaysPrice * overnightStays;
    // Aко броят на нощувките е по-голям от 7, цената за нощувка се намаля с 5%.
    if (overnightStays > 7) {
        price = 0.95 * overnightStaysPrice * overnightStays;
    }
    // процент от бюджета предвиден за допълнителни разходи.
    const additionalCosts = additionalCostsPercentage / 100 * budget;
    const totalCosts = price + additionalCosts;
    const difference = Math.abs(budget - totalCosts).toFixed(2);

    if (budget >= totalCosts) {
        console.log(`Ivanovi will be left with ${difference} leva after vacation.`);
    } else {
        console.log(`${difference} leva needed.`);
    }
}
familyTrip(["800.50",
    "8",
    "100",
    "2"]);