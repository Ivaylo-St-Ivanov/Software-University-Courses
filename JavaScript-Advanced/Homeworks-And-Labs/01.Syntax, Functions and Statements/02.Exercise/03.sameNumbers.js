function sameNumbers(num) {

    'use strict';
    let sum = 0;
    let isSame = true;
    let numToString = num.toString();
    let firstDigit = numToString[0];

    for (const current of numToString) {
        if (firstDigit != current) {
            isSame = false;
            break;
        }
    }

    for (const current of numToString) {
        sum += +current;
    }

    console.log(isSame);
    console.log(sum);
}
sameNumbers(1234);