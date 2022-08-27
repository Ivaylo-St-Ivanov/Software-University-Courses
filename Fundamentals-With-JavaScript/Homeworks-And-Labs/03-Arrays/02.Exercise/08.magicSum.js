function magicSum(array, num) {

    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        for (let j = i + 1; j < arrayLength; j++) {
            if (array[i] + array[j] === num) {
                console.log(array[i] + ' ' + array[j]);
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27);