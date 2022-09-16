function processOddPositions(array) {

    'use strict';
    return array.filter((x, i) => i % 2 != 0).map(x => x * 2).reverse().join(' ');
}
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));