function spiralMatrix(rowsCount, columnCount) {

    let startRowIndex = 0;
    let endRowIndex = rowsCount;
    let startColumnIndex = 0;
    let endColumnIndex = columnCount;
    let collection = [];
    let value = 1;

    for (let i = 0; i < rowsCount; i++) {
        let row = new Array(rowsCount).fill(0);
        collection.push(row);
    }

    while (startRowIndex < endRowIndex && startColumnIndex < endColumnIndex) {

        for (let i = startColumnIndex; i < endColumnIndex; i++) {
            collection[startRowIndex][i] = value++;
        }
        startRowIndex++;

        for (let i = startRowIndex; i < endRowIndex; i++) {
            collection[i][endColumnIndex - 1] = value++;
        }
        startColumnIndex++;

        if (startRowIndex < endRowIndex) {
            for (let i = endColumnIndex - 2; i >= startColumnIndex; i--) {
                collection[endRowIndex - 1][i] = value++;
            }
            endRowIndex--;
        }

        if (startColumnIndex < endColumnIndex) {
            for (let i = endRowIndex; i >= startRowIndex; i--) {
                collection[i][startColumnIndex - 1] = value++;
            }
            endColumnIndex--;
        }
    }

    for (const array of collection) {
        console.log(array.join(' '));
    }
}
spiralMatrix(5, 5);