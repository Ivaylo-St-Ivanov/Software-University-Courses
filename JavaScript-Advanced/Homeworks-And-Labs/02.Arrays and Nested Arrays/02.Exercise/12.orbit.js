function orbit(input) {

    'use strict';
    const rows = input[0];
    const columns = input[1];
    const x = input[2];
    const y = input[3];
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        let array = new Array(columns).fill(0);
        matrix.push(array);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            matrix[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
        }
    }
    
    matrix.forEach(array => console.log(array.join(' ')));
}
orbit([4, 4, 0, 0]);