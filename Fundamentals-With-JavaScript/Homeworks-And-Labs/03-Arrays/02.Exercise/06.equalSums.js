function equalSums(array) {

    let arrayLength = array.length;
    let isMatch = 'no';

    for (let i = 0; i < arrayLength; i++) {
        let sumLeft = 0;
        let sumRight = 0;
        for (let j = 0; j < arrayLength; j++) {
            if (j < i) {
                sumLeft += array[j];
            } else if (j > i) {
                sumRight += array[j];
            }
        }

        if (sumLeft === sumRight) {
            isMatch = i;
        }
    }

        console.log(isMatch);
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);