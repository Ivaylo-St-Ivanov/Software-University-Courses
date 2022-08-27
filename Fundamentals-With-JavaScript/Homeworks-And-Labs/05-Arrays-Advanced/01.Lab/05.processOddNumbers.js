function processOddNumbers(array) {

    let copyArray = array.slice();
    let resultedArray = [];

    for (let i = 0; i < copyArray.length; i++) {
        let num = 0;
        if (i % 2 !== 0) {
            num = copyArray[i] * 2;
            resultedArray.unshift(num);
        }
    }

    return resultedArray.join(' ');
}
console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));