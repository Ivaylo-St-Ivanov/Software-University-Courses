function negativeOrPositiveNumbers(array) {

    let copyArray = array;
    let newArray = [];

    for (let element of copyArray) {
        if (element >= 0) {
            newArray.push(element);
        } else {
            newArray.unshift(element);
        }
    }

    let print = newArray.join('\n');
    return print;
}
console.log(negativeOrPositiveNumbers(['3', '-2', '0', '-1']));