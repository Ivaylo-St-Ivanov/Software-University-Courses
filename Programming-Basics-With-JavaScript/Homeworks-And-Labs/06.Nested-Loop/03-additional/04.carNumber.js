function carNumber(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let printLine = '';

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            for (let k = start; k <= end; k++) {
                for (let l = start; l <= end; l++) {
                    if (i > l && (j + k) % 2 == 0 && ((i % 2 == 0 && l % 2 != 0) || (i % 2 != 0 && l % 2 == 0))) {
                        printLine += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }

    console.log(printLine);
}
carNumber(['5', '8']);