function diagonalAttack(input) {

    let collection = [];
    let sum1 = 0;
    let sum2 = 0;

    for (let current of input) {
        current = current.split(' ');
        collection.push(current);
    }

    let collectionLength = collection.length;
    let k = collectionLength - 1;
    for (let i = 0; i < collectionLength; i++, k--) {
        sum1 += Number(collection[i][i]);
        sum2 += Number(collection[i][k]);
    }

    let print = function (data) {
        let printLine = '';
        for (const array of collection) {
            printLine += array.join(' ') + '\n';
        }
        return printLine;
    }

    if (sum1 == sum2) {
        let m = 0;
        let n = collectionLength - 1;
        for (let i = 0; i < collectionLength; i++) {
            for (let j = 0; j < collectionLength; j++) {
                if (j != m && j != n) {
                    collection[i][j] = sum1;
                }
            }
            if (i + 1 > collectionLength / 2) {
                m--;
                n++;
            } else if (i < collectionLength / 2) {
                m++;
                n--;
            } else {
                m--;
                n++;
            }
        }
        console.log(print(input));
    } else {
        console.log(print(input));
    }
}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);