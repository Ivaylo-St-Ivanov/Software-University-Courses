function matchTickets(input) {

    const vipPrice = 499.99;
    const normalPrice = 249.99;

    const budget = Number(input[0]);
    const category = input[1];
    const grupCount = Number(input[2]);

    let transport = 0;

    // броят на хората в групата определя какъв процент от бюджета трябва да се задели за транспорт
    // • От 1 до 4 – 75% от бюджета.
    // • От 5 до 9 – 60% от бюджета.
    // • От 10 до 24 – 50% от бюджета.
    // • От 25 до 49 – 40% от бюджета.
    // • 50 или повече – 25% от бюджета.

    if (grupCount <= 4) {
        transport = 0.75 * budget;
    } else if (grupCount > 4 && grupCount <= 9) {
        transport = 0.60 * budget;
    } else if (grupCount > 9 && grupCount <= 24) {
        transport = 0.50 * budget;
    } else if (grupCount > 24 && grupCount <= 49) {
        transport = 0.40 * budget;
    } else if (grupCount > 49) {
        transport = 0.25 * budget;
    }

    const difference = Math.abs(budget - transport);
    let ticketsPrice = 0;

    switch (category) {
        case "VIP": ticketsPrice = grupCount * vipPrice; break;
        case "Normal": ticketsPrice = grupCount * normalPrice; break;
    }

    const residue = Math.abs(difference - ticketsPrice);
    
    if (difference >= ticketsPrice) {
        console.log(`Yes! You have ${residue.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${residue.toFixed(2)} leva.`);
    }
}
matchTickets(["30000", "VIP", "49"]);