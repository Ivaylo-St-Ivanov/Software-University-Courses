function sumFirstLast(array) {

    'use strict';
    const arrayCopy = array.slice(0);
    const firstNum = +arrayCopy.shift();
    const lastNum = +arrayCopy.pop();

    return firstNum + lastNum;
}
console.log(sumFirstLast(['20', '30', '40']));