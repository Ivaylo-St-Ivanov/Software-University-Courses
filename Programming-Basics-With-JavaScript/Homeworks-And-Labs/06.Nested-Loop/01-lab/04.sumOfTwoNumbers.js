function sumOfTwoNumbers(input) {

    const startNum = Number(input[0]);
    const endNum = Number(input[1]);
    const magicNum = Number(input[2]);

    let counterCombinations = 0;
    let isCombination = false;

    for (let i = startNum; i <= endNum; i++) {
        for (let j = startNum; j <= endNum; j++) {
            counterCombinations++;
            if (i + j === magicNum) {
                console.log(`Combination N:${counterCombinations} (${i} + ${j} = ${magicNum})`);
                isCombination = true;
                break;
            }
        }

        if (isCombination === true) {
            break;
        }
    }

    if (!isCombination) {
        console.log(`${counterCombinations} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers(["88", "888", "1000"]);