function equalArrays(array1, array2) {

    let sum = 0;
    let index = 0;
    let isIdentical = false;

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            sum += Number(array1[i]);
            index++;
            isIdentical = true;
        } else {
            isIdentical = false;
            break;
        }
    }

    if (isIdentical === true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }
}
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);