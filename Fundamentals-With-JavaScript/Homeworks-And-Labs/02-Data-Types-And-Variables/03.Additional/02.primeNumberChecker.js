function primeNumberChecker(num) {

    let result = '';

    if (num < 9) {
        if (num == 2 || num == 3 || num == 5 || num == 7) {
            result = 'true';
        } else {
            result = 'false';
        }
    } else {
        if (num % 2 != 0 && num % 3 != 0 && num % 5 != 0 && num % 7 != 0) {
            result = 'true';
        } else {
            result = 'false';
        }
    }

    return result;
}
console.log(primeNumberChecker(9));