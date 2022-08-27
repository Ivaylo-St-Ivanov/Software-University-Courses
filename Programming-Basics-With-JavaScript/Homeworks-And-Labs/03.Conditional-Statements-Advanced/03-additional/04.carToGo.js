function carToGo(input) {

    const budget = Number(input[0]);
    const season = input[1];

    let price = 0;
    let type = 0;
    let carClass = 0;

    if (budget <= 100) {
        carClass = "Economy class";
        switch (season) {
            case "Summer": type = "Cabrio";
                price = 0.35 * budget;
                break;
            case "Winter": type = "Jeep";
                price = 0.65 * budget;
                break;
        }
    } else if (budget <= 500) {
        carClass = "Compact class";
        switch (season) {
            case "Summer": type = "Cabrio";
                price = 0.45 * budget;
                break;
            case "Winter": type = "Jeep";
                price = 0.80 * budget;
                break;
        }
    } else if (budget > 500) {
        carClass = "Luxury class";
        type = "Jeep";
        price = 0.9 * budget;
    }

    console.log(`${carClass}`);
    console.log(`${type} - ${price.toFixed(2)}`);
}
carToGo(["99.99", "Summer"]);