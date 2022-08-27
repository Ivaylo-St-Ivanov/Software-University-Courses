function birthdayParty(input) {

    const rent = Number(input[0]);

    // • Торта – цената ѝ е 20% от наема на залата
    // • Напитки – цената им е 45% по-малко от тази на тортата
    // • Аниматор – цената му е 1/3 от цената за наема на залата
    const cakePrice = 0.2 * rent;
    const drinksPrice = 0.55 * cakePrice;
    const animatorPrice = rent / 3;

    const budget = rent + cakePrice + drinksPrice + animatorPrice;
    console.log(budget);
}
birthdayParty(["2250"]);