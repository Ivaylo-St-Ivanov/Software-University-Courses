function equalNeighbors(input) {

    let pairs = 0;

    for (let rows = 0; rows < input.length; rows++) {
        for (let columns = 0; columns < input[0].length; columns++) {
            const current = input[rows][columns];

            if (rows == input.length - 1) {
                if (current == input[rows][columns + 1]) {
                    pairs++;
                }
            } else if (columns == input[0].length - 1) {
                if (current == input[rows + 1][columns]) {
                    pairs++;
                }
            } else {
                if (current == input[rows][columns + 1]) {
                    pairs++;
                }
                if (current == input[rows + 1][columns]) {
                    pairs++;
                }
            }
        }
    }

    return pairs;
}

equalNeighbors([
    ['2', '2', '5', '7', '4'],

    ['4', '0', '5', '3', '4'],

    ['2', '5', '5', '4', '2']
]);