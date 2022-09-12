function aggregateElements(array) {

    'use strict';
    let sumElements = 0;
    let inverseSum = 0;
    let concatElements = '';

    for (const num of array) {
        sumElements += num;
        inverseSum += 1 / num;
        concatElements += num;
    }

    console.log(sumElements);
    console.log(inverseSum);
    console.log(concatElements);
}
aggregateElements([2, 4, 8, 16]);