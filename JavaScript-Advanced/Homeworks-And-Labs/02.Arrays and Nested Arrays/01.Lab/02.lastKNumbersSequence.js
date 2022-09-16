function lastKNumbersSequence(n, k) {

    'use strict';
    const result = [1];
    const resultLength = n;

    for (let i = 0; i < resultLength - 1; i++) {
        let sum = 0;
        const lastK = result.slice(-k);
        for (const num of lastK) {
            sum += num;
        }
        result.push(sum);
    }

    return result;
}
console.log(lastKNumbersSequence(8, 2));