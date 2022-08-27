function specialNumbers(number) {

    for (let i = 1; i <= number; i++) {
        let isSpecial = false;
        let currentDigit = i.toString();
        let sumOfDigits = 0;
        let result = i + ' -> ';
        for (let j = 0; j < currentDigit.length; j++) {
            sumOfDigits += Number(currentDigit[j]);
        }
        if (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11) {
            isSpecial = true;
        }
        isSpecial === true ? result += 'True' : result += 'False';
        console.log(result);
    }
}
specialNumbers(15);