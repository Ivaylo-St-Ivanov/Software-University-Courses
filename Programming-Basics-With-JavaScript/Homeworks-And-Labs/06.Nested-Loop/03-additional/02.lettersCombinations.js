function lettersCombinations(input) {

    let startLetter = input[0];
    let endtLetter = input[1];
    let specialLetter = input[2];
    let start = startLetter.charCodeAt();
    let end = endtLetter.charCodeAt();
    let special = specialLetter.charCodeAt();
    let counter = 0;
    let printLine = '';

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            for (let k = start; k <= end; k++) {
                if (i != special && j != special && k != special) {
                    counter++;
                    printLine += `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)} `;
                }
            }
        }
    }

    console.log(printLine + counter);
}
lettersCombinations(['a', 'c', 'z']);