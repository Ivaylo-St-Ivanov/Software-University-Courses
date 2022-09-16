function equalNeighbors(matrix) {

    'use strict';
    let equalPairs = 0;

    for (let rows = 0; rows < matrix.length; rows++) {
        for (let columns = 0; columns < matrix[rows].length - 1; columns++) {
            if (matrix[rows][columns] == matrix[rows][columns + 1]) {
                equalPairs++;
            }
        }
    }

    for (let rows = 0; rows < matrix.length - 1; rows++) {
        for (let columns = 0; columns < matrix[rows].length; columns++) {
            if (matrix[rows][columns] == matrix[rows + 1][columns]) {
                equalPairs++;
            }
        }
    }

    return equalPairs;
}
console.log(equalNeighbors([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]));