function agencyProfit(input) {

    const airlineCompany = input[0];
    const numberOfTicketsForAdults = Number(input[1]);
    const numberOfTicketsForKids = Number(input[2]);
    const pricePerTicketForAdult = Number(input[3]);
    const service = Number(input[4]);

    // детският билет е със 70% по-евтин
    const pricePerTicketForKid = pricePerTicketForAdult * 0.3;
    // Агенцията добавя към нетната цена на всеки билет такса обслужване.
    const finalPricePerTicketForAdult = pricePerTicketForAdult + service;
    const finalPricePerTicketForKid = pricePerTicketForKid + service;
    const totalPriceForAllTickets = numberOfTicketsForAdults * finalPricePerTicketForAdult + numberOfTicketsForKids * finalPricePerTicketForKid;
    // Крайната печалба на Агенцията е 20% от общата цена на всички билети.
    const profit = 0.2 * totalPriceForAllTickets;

    console.log(`The profit of your agency from ${airlineCompany} tickets is ${profit.toFixed(2)} lv.`);
}
agencyProfit(["WizzAir"
    ,"15"
    ,"5"
    ,"120"
    ,"40"]);