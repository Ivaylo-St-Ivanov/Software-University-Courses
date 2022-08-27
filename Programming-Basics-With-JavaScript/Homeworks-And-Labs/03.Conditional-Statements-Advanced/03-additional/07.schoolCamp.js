function schoolCamp(input) {

    const overnightPriceGirlsOrBoysForWinter = 9.60;
    const overnightPriceGirlsOrBoysForSpring = 7.20;
    const overnightPriceGirlsOrBoysForSummer = 15.00;
    const overnightPriceMixedGroupForWinter = 10.00;
    const overnightPriceMixedGroupForSpring = 9.50;
    const overnightPriceMixedGroupForSummer = 20.00;

    // спортовете, които ще се практикуват в зависимост от вида на ваканцията и групата:
    const girlsWinter = "Gymnastics";
    const girlsSpring = "Athletics";
    const girlsSummer = "Volleyball";
    const boysWinter = "Judo";
    const boysSpring = "Tennis";
    const boysSummer = "Football";
    const mixedGroupWinter = "Ski";
    const mixedGroupSpring = "Cycling";
    const mixedGroupSummer = "Swimming";

    const season = input[0];
    const group = input[1];
    const studentsCount = Number(input[2]);
    const overnightCount = Number(input[3]);

    let price = studentsCount * overnightCount;
    let sport = "";

    switch (group) {
        case "boys":
            switch (season) {
                case "Winter": sport = boysWinter;
                    price *= overnightPriceGirlsOrBoysForWinter; break;
                case "Spring": sport = boysSpring;
                    price *= overnightPriceGirlsOrBoysForSpring; break;
                case "Summer": sport = boysSummer;
                    price *= overnightPriceGirlsOrBoysForSummer; break;
            }
            break;
        case "girls":
            switch (season) {
                case "Winter": sport = girlsWinter;
                    price *= overnightPriceGirlsOrBoysForWinter; break;
                case "Spring": sport = girlsSpring;
                    price *= overnightPriceGirlsOrBoysForSpring; break;
                case "Summer": sport = girlsSummer;
                    price *= overnightPriceGirlsOrBoysForSummer; break;
            }
            break;
        case "mixed":
            switch (season) {
                case "Winter": sport = mixedGroupWinter;
                    price *= overnightPriceMixedGroupForWinter; break;
                case "Spring": sport = mixedGroupSpring;
                    price *= overnightPriceMixedGroupForSpring; break;
                case "Summer": sport = mixedGroupSummer;
                    price *= overnightPriceMixedGroupForSummer; break;
            }
            break;
    }
    // • Ако броят на учениците е 50 или повече, училището получава 50% отстъпка
    // • Ако броят на учениците е 20 или повече и в същото време по-малък от 50, училището получава 15% отстъпка
    // • Ако броят на учениците е 10 или повече и в същото време по-малък от 20, училището получава 5% отстъпка
    if (studentsCount >= 50) {
        price *= 0.5;
    } else if (studentsCount >= 20) {
        price *= 0.85;
    } else if (studentsCount >= 10) {
        price *= 0.95;
    }
    console.log(`${sport} ${price.toFixed(2)} lv.`);
}
schoolCamp(["Summer", "boys", "60", "7"]);