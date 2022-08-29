function magicMatrices(input) {

    let length = input.length;
    let rowSum = 0;
    let columnSum = 0;
    let isMagic = true;

    for (let i = 0; i < length; i++) {
        let currentRowSum = 0;
        let currentColumnSum = 0;

        for (let j = 0; j < length; j++) {
            currentRowSum += input[i][j];
            currentColumnSum += input[j][i];
        }
        if (i == 0) {
            rowSum = currentRowSum;
            columnSum = currentColumnSum;
        } else if (rowSum != currentRowSum) {
            isMagic = false;
            break;
        } else if (columnSum != currentColumnSum) {
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