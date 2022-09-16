function negativePositiveNumbers(array) {

    'use strict';
    const result = [];

    for (const num of array) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    console.log(result.join('\n'));
}
negativePositiveNumbers([7, -2, 8, 9]);