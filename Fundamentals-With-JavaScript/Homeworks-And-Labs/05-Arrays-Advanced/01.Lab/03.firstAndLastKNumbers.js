function firstAndLastKNumbers(array) {

    let copyArray = array.slice();
    let numK = copyArray[0];
    let firstK = copyArray.slice(1, numK + 1).join(' ');
    let secondK = copyArray.slice(-numK).join(' ');

    console.log(firstK);
    console.log(secondK);
}
firstAndLastKNumbers([3, 6, 7, 8, 9]);