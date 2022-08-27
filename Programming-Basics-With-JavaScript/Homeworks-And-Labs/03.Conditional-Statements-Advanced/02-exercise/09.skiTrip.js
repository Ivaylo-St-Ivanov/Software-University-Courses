function skiTrip(input) {

    const roomForOnePersonPrice = 18.00;
    const apartmentPrice = 25.00;
    const presidentApartmentPrice = 35.00;

    const days = Number(input[0]);
    const room = input[1];
    const evaluation = input[2];

    let finalPrice = 0;

    switch (room) {
        case "room for one person":
            finalPrice = (days - 1) * roomForOnePersonPrice;
            break;
        case "apartment":
            finalPrice = (days - 1) * apartmentPrice;
            if (days < 10) {
                finalPrice *= 0.70;
            } else if (days >= 10 && days <= 15) {
                finalPrice *= 0.65;
            } else if (days > 15) {
                finalPrice *= 0.50;
            }
            break;
        case "president apartment":
            finalPrice = (days - 1) * presidentApartmentPrice;
            if (days < 10) {
                finalPrice *= 0.90;
            } else if (days >= 10 && days <= 15) {
                finalPrice *= 0.85;
            } else if (days > 15) {
                finalPrice *= 0.80;
            }
            break;
    }

    switch (evaluation) {
        case "positive": finalPrice *= 1.25; break;
        case "negative": finalPrice *= 0.90; break;
    }

    console.log(finalPrice.toFixed(2));
}
skiTrip(["12", "room for one person", "positive"]);