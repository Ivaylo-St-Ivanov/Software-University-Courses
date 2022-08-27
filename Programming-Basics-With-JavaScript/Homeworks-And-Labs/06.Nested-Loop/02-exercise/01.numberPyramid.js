function numberPyramid(input) {

    const num = Number(input[0]);

    let currentNum = 1;
    let printCurrentLine = "";
    let isBigger = false;

    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            if (currentNum > num) {
                isBigger = true;
                break;
            }
            printCurrentLine += currentNum + " ";
            currentNum++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";

        if (isBigger === true) {
            break;
        }
    }
}
numberPyramid(["15"]);