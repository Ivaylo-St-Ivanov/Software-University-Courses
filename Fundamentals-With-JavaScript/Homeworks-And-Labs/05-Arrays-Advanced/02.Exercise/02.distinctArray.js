function distinctArray(array) {

    let copyArray = array.slice(0);
    let resultArray = [];

    let copyArrayLength = copyArray.length;
    for (let i = 0; i < copyArrayLength; i++) {
        let current = copyArray.pop();
        if (copyArray.includes(current)) {
            resultArray = resultArray;
        } else {
            resultArray.push(current);
        }
    }

    return resultArray.reverse().join(' ');
}
console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));