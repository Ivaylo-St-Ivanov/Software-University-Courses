function sortArray(array, command) {

    'use strict';
    const arrayCopy = array.slice();
    return arrayCopy.sort((a, b) => command == 'asc' ? a - b : b - a);
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));

console.log('------');

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));