function smallestTwoNumbers(array) {

    'use strict';
    const sortedArray = array.sort((a, b) => a - b);
    const smallestTwo = array.slice(0, 2);

    console.log(smallestTwo.join(' '));
}
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);