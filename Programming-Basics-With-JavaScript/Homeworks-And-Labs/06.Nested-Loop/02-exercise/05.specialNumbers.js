function specialNumbers(input) {

    const num = Number(input[0]);

    let printLine = "";
    let isSpecial = false;

    for (let i = 1111; i <= 9999; i++) {
        let currentNum = i + "";
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (num % currentDigit === 0) {
                isSpecial = true;
            } else {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial) {
            printLine += currentNum + " ";
        }
    }

    console.log(printLine);
}
specialNumbers(["16"]);