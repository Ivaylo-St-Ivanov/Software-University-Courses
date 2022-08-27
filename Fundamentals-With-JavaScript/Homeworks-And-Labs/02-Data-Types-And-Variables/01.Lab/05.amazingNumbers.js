function amazingNumbers(number) {
    
    const numberToString = String(number);
    let sumOfDigit = 0;
    for (let i = 0; i < numberToString.length; i++) {
        let currentDigit = Number(numberToString[i]);
        sumOfDigit += currentDigit;
    }
    
    let result = sumOfDigit.toString().includes('9');
    console.log(result ? `${number} Amazing? True` : `${number} Amazing? False`);
}
amazingNumbers(583472);