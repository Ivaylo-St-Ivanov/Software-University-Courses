function biggestElement(matrix) {

    'use strict';
    const result = [];

    for (const array of matrix) {
        let biggest = array.sort((a, b) => b - a).shift();
        result.push(biggest);
    }

    result.sort((a, b) => b - a);
    return result[0];
}
console.log(biggestElement([[20, 50, 10],
                            [8, 33, 145]]));