function diagonalSums(matrix) {

    'use strict';
    let first = 0;
    let second = 0;
    let length = matrix.length;

    let indexToFirst = 0;
    let indexToSecond = length - 1;
    for (let i = 0; i < length; i++) {
        first += matrix[i][indexToFirst];
        indexToFirst++;
        second += matrix[i][indexToSecond];
        indexToSecond--;
    }

    console.log(`${first} ${second}`);
}
diagonalSums([[3, 5, 17],
              [-1, 7, 14],
              [1, -8, 89]]);