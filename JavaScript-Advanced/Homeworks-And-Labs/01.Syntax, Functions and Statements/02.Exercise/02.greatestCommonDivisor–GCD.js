function greatestCommonDivisorGCD(num1, num2) {

    'use strict';
    let overage;
    let divisor;

    if (num1 > num2) {
        overage = num1 % num2;
        divisor = num2;
    } else {
        overage = num2 % num1;
        divisor = num1;
    }

    let result;
    if (overage) {
        while (overage != 0) {
            result = overage;
            overage = divisor % overage;
            divisor = result;
        }
    } else {
        result = divisor;
    }

    console.log(result);
}
greatestCommonDivisorGCD(2154, 458);