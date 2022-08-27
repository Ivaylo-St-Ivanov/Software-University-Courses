function reverseInPlace(array) {

    let result = '';

    for (let i = array.length - 1; i >= 0; i--) {
        if (i === 0) {
            result += array[i];
        } else {
            result += array[i] + ' ';
        }
    }

    console.log(result);
}
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);