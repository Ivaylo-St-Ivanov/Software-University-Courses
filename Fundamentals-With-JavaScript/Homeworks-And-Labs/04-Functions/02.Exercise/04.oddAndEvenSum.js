function oddAndEvenSum(num) {

    let numToString = String(num);

    function oddSum(numToString) {
        let oddSum = 0;
        for (let i = 0; i < numToString.length; i++) {
            let currentDigit = Number(numToString[i]);
            if (currentDigit % 2 !== 0) {
                oddSum += currentDigit;
            }
        }
        return oddSum;
    }

    function evenSum(numToString) {
        let evenSum = 0;
        for (let i = 0; i < numToString.length; i++) {
            let currentDigit = Number(numToString[i]);
            if (currentDigit % 2 === 0) {
                evenSum += currentDigit;
            }
        }
        return evenSum;
    }

    console.log(`Odd sum = ${oddSum(numToString)}, Even sum = ${evenSum(numToString)}`);
}
oddAndEvenSum(3495892137259234);