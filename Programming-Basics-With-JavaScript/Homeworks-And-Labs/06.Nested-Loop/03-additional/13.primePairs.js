function primePairs(input) {

    let startValueToFirstPair = Number(input[0]);
    let startValueToSecondPair = Number(input[1]);
    let differenceBetweenStartAndEndValueToFirstPair = Number(input[2]);
    let differenceBetweenStartAndEndValueToSecondPair = Number(input[3]);

    let endValueToFirstPair = startValueToFirstPair + differenceBetweenStartAndEndValueToFirstPair;
    let endValueToSecondPair = startValueToSecondPair + differenceBetweenStartAndEndValueToSecondPair;

    for (let i = startValueToFirstPair; i <= endValueToFirstPair; i++) {
        for (let j = startValueToSecondPair; j <= endValueToSecondPair; j++) {
            if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0 && j % 2 != 0 && j % 3 != 0 && j % 5 != 0 && j % 7 != 0) {
                console.log(`${i}${j}`);
            }
        }
    }
}
primePairs(['10', '30', '9', '6']);