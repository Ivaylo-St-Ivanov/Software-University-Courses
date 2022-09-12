function sumOfNumbersNToM(n, m) {

    'use strict';
    let result = 0;

    for (let i = +n; i <= +m; i++) {
        result += i;
    }

    return result;
}
console.log(sumOfNumbersNToM('-8', '20'));