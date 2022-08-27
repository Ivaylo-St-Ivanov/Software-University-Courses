function tennisRanklist(input) {

    const pointsForW = 2000;
    const pointsForF = 1200;
    const pointsForSF = 720;

    let index = 0;
    let numberOfTournaments = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;

    let tournamentPoints = 0;
    let wins = 0;

    for (let i = 1; i <= numberOfTournaments; i++) {
        let currentTournament = input[index];
        index++;

        switch (currentTournament) {
            case "W": tournamentPoints += pointsForW;
                wins++;
                break;
            case "F": tournamentPoints += pointsForF; break;
            case "SF": tournamentPoints += pointsForSF; break;
        }
    }

    let totalPoints = startingPoints + tournamentPoints;
    let averagePoints = tournamentPoints / numberOfTournaments;
    let winPercentage = wins / numberOfTournaments * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winPercentage.toFixed(2)}%`);
}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);