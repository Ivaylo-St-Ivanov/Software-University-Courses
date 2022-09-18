function diagonalAttack(array) {

    'use strict';
    let arrayCopy = array.slice();

    let matrix = [];
    for (const string of arrayCopy) {
        matrix.push(string.split(' '));
    }

    let row = 0;
    let j = matrix[0].length - 1;
    let length = matrix.length;
    let diagonal1 = 0;
    let diagonal2 = 0;
    for (let i = 0; i < length; i++, j--) {
        diagonal1 += Number(matrix[row][i]);
        diagonal2 += Number(matrix[row][j]);
        row++;
    }

    if (diagonal1 == diagonal2) {
        let indexOfDiagonal1 = 0;
        let indexOfDiagonal2 = matrix[0].length - 1;
        for (let i = 0; i < length; i++) {
            for (let k = 0; k < length; k++) {
                if (k != indexOfDiagonal1 && k != indexOfDiagonal2) {
                    matrix[i][k] = diagonal1;
                }
            }
            indexOfDiagonal1++;
            indexOfDiagonal2--;
        }
        matrix.forEach(array => console.log(array.join(' ')));
    } else {
        matrix.forEach(array => console.log(array.join(' ')));
    }
}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);