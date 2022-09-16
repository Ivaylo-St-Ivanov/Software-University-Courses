function biggerHalf(array) {

    'use strict';
    return array.sort((a, b) => a - b).slice(-Math.ceil(array.length / 2));
}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));