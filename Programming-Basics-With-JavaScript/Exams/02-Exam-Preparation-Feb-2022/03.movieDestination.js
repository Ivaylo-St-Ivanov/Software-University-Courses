function movieDestination(input) {

    const budget = Number(input[0]);
    const destination = input[1];
    const season = input[2];
    const days = Number(input[3]);

    // Цената за един снимачен ден се определя от сезона и дестинацията.
    const winterDubaiPrice = 45000;
    const winterSofiaPrice = 17000;
    const winterLondonPrice = 24000;
    const summerDubaiPrice = 40000;
    const summerSofiaPrice = 12500;
    const summerLondonPrice = 20250;

    let price = 0;

    switch (season) {
        case "Winter":
            switch (destination) {
                case "Dubai": price = days * winterDubaiPrice;
                    // • Ако дестинацията е Дубай – 30% отстъпка от крайната цена
                    price *= 0.7;
                    break;
                case "Sofia": price = days * winterSofiaPrice;
                    // • Ако дестинацията е София – цената се оскъпява с 25%
                    price *= 1.25;
                    break;
                case "London": price = days * winterLondonPrice;
                    break;
            }
            break;
        case "Summer":
            switch (destination) {
                case "Dubai": price = days * summerDubaiPrice;
                    // • Ако дестинацията е Дубай – 30% отстъпка от крайната цена
                    price *= 0.7;
                    break;
                case "Sofia": price = days * summerSofiaPrice;
                    // • Ако дестинацията е София – цената се оскъпява с 25%
                    price *= 1.25;
                    break;
                case "London": price = days * summerLondonPrice;
                    break;
            }
            break;
    }

    const difference = Math.abs(budget - price).toFixed(2);
    if (budget >= price) {
        console.log(`The budget for the movie is enough! We have ${difference} leva left!`);
    } else {
        console.log(`The director needs ${difference} leva more!`);
    }
}
movieDestination(["400000",
    "Sofia",
    "Winter",
    "20"]);