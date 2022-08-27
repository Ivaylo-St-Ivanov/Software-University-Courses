function weddingSeats(input) {

    let lastSector = input[0];
    let rowsInSectorA = Number(input[1]);
    let seatsCountInOddRow = Number(input[2]);

    let firstSector = 'A';
    let firstSectorAsNum = firstSector.charCodeAt();
    let lastSectorAsNum = lastSector.charCodeAt();
    let seatsCounter = 0;
    let rows = rowsInSectorA;

    for (let i = firstSectorAsNum; i <= lastSectorAsNum; i++) {

        for (let j = 1; j <= rows; j++) {

            let startSeat = 97;
            let seats = '';
            if (j % 2 != 0) {
                seats = seatsCountInOddRow;
            } else {
                seats = seatsCountInOddRow + 2;
            }
            for (let k = 1; k <= seats; k++) {
                seatsCounter++;
                console.log(`${String.fromCharCode(i)}${j}${String.fromCharCode(startSeat)}`);
                startSeat++;
            }
        }
        rows++;
    }

    console.log(seatsCounter);
}
weddingSeats(['C', '4', '2']);