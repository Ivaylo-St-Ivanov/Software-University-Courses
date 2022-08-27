function substitute(input) {

    const k = Number(input[0]);
    const l = Number(input[1]);
    const m = Number(input[2]);
    const n = Number(input[3]);

    let substituteCounter = 0;

    for (let i = k; i <= 8; i++) {
        for (let j = 9; j >= l; j--) {
            for (let v = m; v <= 8; v++) {
                for (let w = 9; w >= n; w--) {
                    // Да се отпечатат първите 6 валидни смени по следния начин.
                    if (substituteCounter === 6) {
                        break;
                    }
                    // За да бъде възможна една смяна, първата цифра на всеки от номерата трябва да бъде четна, а втората - нечетна.
                    if (i % 2 === 0 && v % 2 === 0 && j % 2 !== 0 && w % 2 !== 0) {
                        let firstNum = "" + i + j;
                        firstNum = Number(firstNum);
                        let secondNum = "" + v + w;
                        secondNum = Number(secondNum);
                        // За да бъде валидна една смяна, то номерата НЕ трябва да съвпадат.
                        if (firstNum === secondNum) {
                            console.log("Cannot change the same player.");
                        } else {
                            substituteCounter++;
                            console.log(`${i}${j} - ${v}${w}`);
                        }
                    }
                }
            }
        }
        if (substituteCounter === 6) {
            break;
        }
    }
}
substitute(["6",
    "7",
    "5",
    "6"]);