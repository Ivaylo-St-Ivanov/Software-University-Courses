function sortingNumbers(array) {

    'use strict';
    let arrayCopy = array.slice();
    let sorted = arrayCopy.sort((a, b) => a - b);
    let result = [];
    const sortedLength = sorted.length;

    for (let i = 0; i < sortedLength / 2; i++) {
        if (sortedLength % 2 == 0) {
            result.push(sorted[i], sorted[sortedLength - 1 - i]);
        } else {
            if (i != Math.floor(sortedLength / 2)) {
                result.push(sorted[i], sorted[sortedLength - 1 - i]);
            } else {
                result.push(sorted[i]);
            }
        }
    }

    return result;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));