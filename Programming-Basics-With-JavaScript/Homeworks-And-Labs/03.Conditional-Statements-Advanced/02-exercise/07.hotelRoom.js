function hotelRoom(input) {

    let mounth = input[0];
    let nights = Number(input[1]);

    let priceForStudio = 0;
    let priceForApartment = 0;

    if (mounth === "May" || mounth === "October") {
        priceForStudio = nights * 50;
        priceForApartment = nights * 65;
        if (nights > 7 && nights < 14) {
            priceForStudio = priceForStudio * 0.95;
        } else if (nights > 14) {
            priceForStudio = priceForStudio * 0.7;
        }
    } else if (mounth === "June" || mounth === "September") {
        priceForStudio = nights * 75.2;
        priceForApartment = nights * 68.7;
        if (nights > 14) {
            priceForStudio = priceForStudio * 0.8;
        }
    } else if (mounth === "July" || mounth === "August") {
        priceForStudio = nights * 76;
        priceForApartment = nights * 77
    }

    if (nights > 14) {
        priceForApartment = priceForApartment * 0.9;
    }

    console.log(`Apartment: ${priceForApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceForStudio.toFixed(2)} lv.`);
}
hotelRoom(["August", "20"]);