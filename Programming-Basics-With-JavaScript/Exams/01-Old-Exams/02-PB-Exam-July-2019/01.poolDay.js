function poolDay(input) {

    const teamCount = Number(input[0]);
    const entryTicket = Number(input[1]);
    const pricePerDeckChair = Number(input[2]);
    const pricePerUmbrella = Number(input[3]);

    const allEntryTicketPrice = teamCount * entryTicket;
    // При изчислението на броя на чадърите и шезлонгите, техният брой да се закръгли до по-голямото цяло число.
    // Знае се, че само 75% от екипа искат шезлонги.
    const deckChairPrice = Math.ceil(0.75 * teamCount) * pricePerDeckChair;
    // Трябва да имате предвид, че един чадър стига за двама души.
    const umbrellaPrice = Math.ceil(0.5 * teamCount) * pricePerUmbrella;
    const totalCosts = allEntryTicketPrice + deckChairPrice + umbrellaPrice;
    
    console.log(totalCosts.toFixed(2) + " lv.");
}
poolDay(["21",
    "5.50",
    "4.40",
    "6.20"]);