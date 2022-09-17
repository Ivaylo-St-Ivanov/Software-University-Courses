function rotateArray(array, rotationCount) {

    'use strict';
    for (let i = 0; i < rotationCount; i++) {
        let current = array.pop();
        array.unshift(current);
    }

    console.log(array.join(' '));
}
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15);