function footballTournament(input) {

    const teamName = input[0];
    const matchCount = Number(input[1]);
    let index = 2;

    let points = 0;
    let wCounter = 0;
    let dCounter = 0;
    let lCounter = 0;

    for (let i = 1; i <= matchCount; i++) {
        let currentResult = input[index++];
        switch (currentResult) {
            case "W": points += 3;
                wCounter++;
                break;
            case "D": points += 1;
                dCounter++;
                break;
            case "L":
                lCounter++;
                break;
        }
    }

    const winPercentage = wCounter / matchCount * 100;
    if (matchCount === 0) {
        console.log(`${teamName} hasn't played any games during this season.`);
    } else {
        console.log(`${teamName} has won ${points} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${wCounter}`);
        console.log(`## D: ${dCounter}`);
        console.log(`## L: ${lCounter}`);
        console.log(`Win rate: ${winPercentage.toFixed(2)}%`);
    }
}
footballTournament(["Liverpool",
    "10",
    "W",
    "D",
    "D",
    "W",
    "L",
    "W",
    "D",
    "D",
    "W",
    "W"]);