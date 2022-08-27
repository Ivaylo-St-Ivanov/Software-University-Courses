function vacation(input) {

    const budget = Number(input[0]);
    const season = input[1];

    let price = 0;
    let location = "";
    let place = "";

    if (budget <= 1000) {
        place = "Camp";
        switch (season) {
            case "Summer": location = "Alaska";
                price = 0.65 * budget;
                break;
            case "Winter": location = "Morocco";
                price = 0.45 * budget;
                break;
        }
    } else if (budget <= 3000) {
        place = "Hut";
        switch (season) {
            case "Summer": location = "Alaska";
                price = 0.8 * budget;
                break;
            case "Winter": location = "Morocco";
                price = 0.6 * budget;
                break;
        }
    } else if (budget > 3000) {
        place = "Hotel";
        switch (season) {
            case "Summer": location = "Alaska";
                price = 0.9 * budget;
                break;
            case "Winter": location = "Morocco";
                price = 0.9 * budget;
                break;
        }
    }

    console.log(`${location} - ${place} - ${price.toFixed(2)}`);
}
vacation(["5000", "Winter"]);