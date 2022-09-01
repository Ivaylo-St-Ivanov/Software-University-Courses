function signCheck(num1, num2, num3) {

    let result;

    if ((num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0)) {
        result = 'Positive';
    } else {
        result = 'Negative';
    }

    if ((result == 'Positive' && num3 > 0) || (result == 'Negative' && num3 < 0)) {
        result = 'Positive';
    } else {
        result = 'Negative';
    }

    console.log(result);
}
signCheck(5, 12, -15);