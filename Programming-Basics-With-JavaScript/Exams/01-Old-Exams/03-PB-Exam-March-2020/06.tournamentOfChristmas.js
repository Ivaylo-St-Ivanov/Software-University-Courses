function tournamentOfChristmas(input) {

    const tournamentDays = Number(input[0]);
    let index = 1;

    let winDays = 0;
    let totalCharitySum = 0;

    for (let i = 1; i <= tournamentDays; i++) {
        let winCounter = 0;
        let loseCounter = 0;
        let charitySum = 0;
        let current = input[index++];
        while (current !== "Finish") {
            let result = input[index++];
            switch (result) {
                case "win": winCounter++;
                    // Със спечелването на всяка една игра печелите по 20лв. за благотворителност.
                    charitySum += 20;
                    break;
                case "lose": loseCounter++; break;
            }

            current = input[index++];
        }
        
        // Никога няма да имате равен брой спечелени и загубени игри.
        if (winCounter > loseCounter) {
            winDays++;
            // Ако имате повече спечелени игри, отколкото загубени – вие сте победители този ден и увеличавате парите от него с 10%.
            charitySum *= 1.1;
        }
        totalCharitySum += charitySum;
    }

    // При приключване на турнира ако през повечето дни сте били победители печелите турнира и увеличавате всичките спечелени пари с 20%.
    if (winDays > tournamentDays * 0.5) {
        totalCharitySum *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalCharitySum.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalCharitySum.toFixed(2)}`);
    }
}
tournamentOfChristmas(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"]);