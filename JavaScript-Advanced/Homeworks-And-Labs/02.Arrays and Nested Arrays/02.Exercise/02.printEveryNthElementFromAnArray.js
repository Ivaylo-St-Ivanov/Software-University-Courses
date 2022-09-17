function printEveryNthElementFromAnArray(array, step) {

    'use strict';
    return array.filter((x, i) => {
        if (i % step == 0) {
            return x;
        }
    });
}
console.log(printEveryNthElementFromAnArray(['dsa',
    'asd',
    'test',
    'tset'],
    2));