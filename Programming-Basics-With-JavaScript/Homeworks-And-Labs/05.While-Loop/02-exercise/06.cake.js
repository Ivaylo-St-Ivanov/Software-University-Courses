function cake(input) {

    const width = Number(input[0]);
    const length = Number(input[1]);
    // Бележка: Едно парче торта е с размер 1х1 см.
    const numberOfPieces = width * length;
    let index = 2;
    let current = input[index++];
    let counterPieces = 0;

    while (current !== "STOP") {
        let currentPieces = Number(current);
        counterPieces += currentPieces;
        if (counterPieces >= numberOfPieces) {
            break;
        }

        current = input[index++];
    }

    const difference = Math.abs(numberOfPieces - counterPieces);
    if (numberOfPieces > counterPieces) {
        console.log(`${difference} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${difference} pieces more.`);
    }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"]);