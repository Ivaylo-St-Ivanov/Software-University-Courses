function fuelTank(input) {

    const fuel = input[0];
    const Liters = Number(input[1]);

    if (fuel === "Diesel" || fuel === "Gasoline" || fuel === "Gas") {
        if (Liters >= 25) {
            console.log(`You have enough ${fuel.toLowerCase()}.`);
        } else {
            console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
        }
    } else {
        console.log("Invalid fuel!");
    }
}
fuelTank(["Diesel", "200"]);