function excursion(input) {

    const peopleInGrup = Number(input[0]);
    const overnightStays = Number(input[1]);
    const cardsCount = Number(input[2]);
    const ticketsCount = Number(input[3]);

    // • Нощувка - 20 лв.
    // • Карта за транспорт - 1.60 лв.
    // • Билет за музей - 6 лв.
    const overnightStayPrice = 20.00;
    const cardPrice = 1.60;
    const ticketPrice = 6.00;

    const overnightStaysPricePerOne = overnightStays * overnightStayPrice;
    const cardsPricePerOne = cardsCount * cardPrice;
    const ticketsPricePerOne = ticketsCount * ticketPrice;
    const totalSumPerOne = overnightStaysPricePerOne + cardsPricePerOne + ticketsPricePerOne;
    const totalSumForGrup = peopleInGrup * totalSumPerOne;
    // Към крайната сума се начислява допълнително 25% за непредвидени разходи.
    const finalSum = totalSumForGrup * 1.25;

    console.log(finalSum.toFixed(2));
}
excursion(["20",
    "14",
    "30",
    "6"]);