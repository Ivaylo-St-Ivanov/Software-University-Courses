function sumFirstAndLast(array) {

    let firstNum = Number(array.shift());
    let secondNum = Number(array.pop());
    return firstNum + secondNum;
}
console.log(sumFirstAndLast(['20', '30', '40']));