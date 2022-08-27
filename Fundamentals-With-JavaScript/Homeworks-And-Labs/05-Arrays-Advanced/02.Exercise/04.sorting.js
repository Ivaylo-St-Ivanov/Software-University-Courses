function sorting(array) {

    let copyArray = array.slice(0);
    let copyArrayLength = copyArray.length;
    let resultArray = [];

    for (let i = 0; i < copyArrayLength / 2; i++) {
        let descendingOrder = copyArray.sort((a, b) => b - a);
        resultArray.push(descendingOrder.shift());
        resultArray.push(descendingOrder.pop());
    }

    console.log(resultArray.join(' '));
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);