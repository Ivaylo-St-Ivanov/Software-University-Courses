function orbit(input) {

    let rows = input[0];
    let columns = input[1];
    let starRow = input[2];
    let starColumn = input[3];
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let row = new Array(rows).fill(0);
        matrix.push(row);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            matrix[i][j] = Math.max(Math.abs(i - starRow), Math.abs(j - starColumn)) + 1;
        }
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));
}
orbit([3, 3, 2, 2]);