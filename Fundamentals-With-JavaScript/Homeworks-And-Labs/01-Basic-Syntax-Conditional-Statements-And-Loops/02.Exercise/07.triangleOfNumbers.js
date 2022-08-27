function triangleOfNumbers(n) {

    for (let i = 1; i <= n; i++) {
        let printLine = '';
        for (let j = 1; j <= i; j++) {
            if (j === i) {
                printLine += i;
            } else {
                printLine += i + ' ';
            }
        }
        console.log(printLine);
    }
}
triangleOfNumbers(6);