function oscars(input) {

    const pointsForNominee = 1250.5;

    let index = 0;
    let actorName = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    let evaluatorCount = Number(input[index]);
    index++;

    let isNominee = false;

    for (let i = 1; i <= evaluatorCount; i++) {
        let evaluatorName = input[index];
        index++;
        let evaluatorPoints = Number(input[index]);
        index++;
        points += evaluatorName.length * evaluatorPoints / 2;

        if (points > pointsForNominee) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
            isNominee = true;
            break;
        }
    }

    const difference = pointsForNominee - points;
    if (!isNominee) {
        console.log(`Sorry, ${actorName} you need ${difference.toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);