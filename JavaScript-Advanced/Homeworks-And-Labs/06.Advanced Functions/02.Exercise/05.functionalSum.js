function add(num) {

    'use strict';
    let sum = 0;

    function inner(next) {
        sum += next;
        return inner;
    }

    inner.toString = () => {
        return sum;
    }
    
    return inner(num);
}

console.log(add(1).toString());
console.log('-----');
console.log(add(1)(6)(-3).toString());