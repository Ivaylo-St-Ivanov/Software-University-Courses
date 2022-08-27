function fitnessCard(input) {

    const budget = Number(input[0]);
    const gender = input[1];
    const age = Number(input[2]);
    const sport = input[3];

    //    men's price
    const mGymPrice = 42;
    const mBoxingPrice = 41;
    const mYogaPrice = 45;
    const mZumbaPrice = 34;
    const mDancesPrice = 51;
    const mPilatesprice = 39;
    //    women's price
    const fGymPrice = 35;
    const fBoxingPrice = 37;
    const fYogaPrice = 42;
    const fZumbaPrice = 31;
    const fDancesPrice = 53;
    const fPilatesprice = 37;

    let price = 0;

    switch (gender) {
        case "m":
            switch (sport) {
                case "Gym": price = mGymPrice; break;
                case "Boxing": price = mBoxingPrice; break;
                case "Yoga": price = mYogaPrice; break;
                case "Zumba": price = mZumbaPrice; break;
                case "Dances": price = mDancesPrice; break;
                case "Pilates": price = mPilatesprice; break;
            }
            break;
        case "f":
            switch (sport) {
                case "Gym": price = fGymPrice; break;
                case "Boxing": price = fBoxingPrice; break;
                case "Yoga": price = fYogaPrice; break;
                case "Zumba": price = fZumbaPrice; break;
                case "Dances": price = fDancesPrice; break;
                case "Pilates": price = fPilatesprice; break;
            }
            break;
    }

    // Всички цени на карти за ученици (възраст под 19 години вкл.) са с 20% намаление.
    if (age <= 19) {
        price *= 0.8;
    }

    const difference = Math.abs(budget - price).toFixed(2);
    if (budget >= price) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${difference} more.`);
    }
}
fitnessCard(["50", "m", "23", "Gym"]);