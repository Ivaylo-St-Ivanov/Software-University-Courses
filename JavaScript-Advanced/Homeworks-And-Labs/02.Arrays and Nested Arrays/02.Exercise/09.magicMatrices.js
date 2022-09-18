function magicMatrices(matrix) {

    'use strict';
    let sum = 0;
    let length = matrix.length;
    let isMagic = false;

    for (let i = 0; i < length; i++) {
        let rowSum = 0;
        let columnSum = 0;
        for (let j = 0; j < length; j++) {
            rowSum += matrix[i][j];
            columnSum += matrix[j][i];
        }

        if (sum == 0) {
            if (rowSum == columnSum) {
                isMagic = true;
                sum = rowSum;
            } else {
                isMagic = false;
                break;
            }
        } else if (rowSum == columnSum && rowSum == sum) {
            isMagic = true;
        } else {
            isMagic = false;
            break;
        }
    }

    if (isMagic) {
        console.log('true');
    } else {
        console.log('false');
    }
}
magicMatrices([[4, 5, 6],
               [6, 5, 4],
               [5, 5, 5]]);