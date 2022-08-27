function challengeTheWedding(input) {

    let mans = Number(input[0]);
    let womans = Number(input[1]);
    let tables = Number(input[2]);
    let printLine = '';
    let table = 0;

    for (let i = 1; i <= mans; i++) {
        for (let j = 1; j <= womans; j++) {
            table++;
            if (table <= tables) {
                printLine += `(${i} <-> ${j}) `;
            }
        }
    }

    console.log(printLine);
}
challengeTheWedding(['5', '8', '40']);