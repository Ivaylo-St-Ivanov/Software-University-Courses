function equalSumsEvenOddPosition(input) {

    const firstNum = Number(input[0]);
    const secondNum = Number(input[1]);

    let printLine = "";

    for (let i = firstNum; i <= secondNum; i++) {
        let currentNum = i + "";
        let evenSum = 0;
        let oddSum = 0;
        for (let j = 0; j <= currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }

        if (evenSum === oddSum) {
            printLine += currentNum + " ";
        }
    }
    console.log(printLine);
}
equalSumsEvenOddPosition(["100000", "100050"]);