function movieProfit(input) {

    const filmName = input[0];
    const days = Number(input[1]);
    const ticketsCount = Number(input[2]);
    const ticketPrice = Number(input[3]);
    const percentageForCinema = Number(input[4]);

    const ticketsPricePerDay = ticketsCount * ticketPrice;
    const profitForAllPeriod = days * ticketsPricePerDay;
    const profitForCinema = percentageForCinema / 100 * profitForAllPeriod;
    const movieProfit = profitForAllPeriod - profitForCinema;

    console.log(`The profit from the movie ${filmName} is ${movieProfit.toFixed(2)} lv.`);
}
movieProfit(["The Programmer",
    "20",
    "500",
    "7.50",
    "7"]);