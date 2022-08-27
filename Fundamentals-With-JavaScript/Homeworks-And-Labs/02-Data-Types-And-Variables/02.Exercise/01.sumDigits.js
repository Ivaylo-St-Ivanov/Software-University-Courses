function sumDigits(number) {

    let numberToString = number.toString();
    let sumOfDigits = 0;

    for (let i = 0; i < numberToString.length; i++) {
        sumOfDigits += Number(numberToString[i]);
    }
    console.log(sumOfDigits);
}
sumDigits(245678);