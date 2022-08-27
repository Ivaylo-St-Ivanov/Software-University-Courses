function reportSystem(input) {

    const expectedAmount = Number(input[0]);
    let index = 1;
    let current = input[index++];
    let counterPayments = 0;
    let totalAmount = 0;
    let moneyOnHand = 0;
    let counterMoneyOnHand = 0;
    let card = 0;
    let counterCard = 0;

    while (current !== "End") {
        let currentProductPrice = Number(current);
        counterPayments++;
        // По условие се редуват първо в брой плащане, след това чрез кредитна карта.
        if (counterPayments % 2 !== 0) {
            // • Ако продуктът надвишава 100лв., за него не може да се плати в брой.
            if (currentProductPrice > 100) {
                console.log("Error in transaction!");
            } else {
                totalAmount += currentProductPrice;
                moneyOnHand += currentProductPrice;
                counterMoneyOnHand++;
                console.log("Product sold!");
            }
        } else {
            // • Ако продуктът е на цена под 10лв., за него не може да се плати с кредитна карта.
            if (currentProductPrice < 10) {
                console.log("Error in transaction!");
            } else {
                totalAmount += currentProductPrice;
                card += currentProductPrice;
                counterCard++;
                console.log("Product sold!");
            }
        }

        if (totalAmount >= expectedAmount) {
            let averageCS = moneyOnHand / counterMoneyOnHand;
            let averageCC = card / counterCard;
            console.log(`Average CS: ${averageCS.toFixed(2)}`);
            console.log(`Average CC: ${averageCC.toFixed(2)}`);
            break;
        }

        current = input[index++];
    }

    if (current === "End") {
        console.log("Failed to collect required money for charity.");
    }
}
reportSystem(["600", "86", "150", "98", "227", "End"]);