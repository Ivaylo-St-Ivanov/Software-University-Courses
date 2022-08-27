function journey(input) {

    const budget = Number(input[0]);
    const season = input[1];

    let destination = 0;
    let place = 0;
    let sum = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer":
                sum = budget * 0.30;
                place = "Camp";
                break;
            case "winter":
                sum = budget * 0.70;
                place = "Hotel";
                break;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case "summer":
                sum = budget * 0.40;
                place = "Camp";
                break;
            case "winter":
                sum = budget * 0.80;
                place = "Hotel";
                break;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        sum = budget * 0.90;
        place = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${sum.toFixed(2)}`);
}
journey(["1500", "summer"]);