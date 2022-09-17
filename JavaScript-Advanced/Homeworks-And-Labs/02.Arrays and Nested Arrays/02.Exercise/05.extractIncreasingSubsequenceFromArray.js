function extractIncreasingSubsequenceFromArray(array) {

    'use strict';
    const result = [array[0]];
    const arrayLength = array.length;

    for (let i = 1; i < arrayLength; i++) {
        if (array[i] >= result[result.length - 1]) {
            result.push(array[i]);
        }
    }

    return result;
}
console.log(extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));