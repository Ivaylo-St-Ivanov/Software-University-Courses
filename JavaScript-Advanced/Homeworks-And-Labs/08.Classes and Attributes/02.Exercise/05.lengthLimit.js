'use strict';
class Stringer {
    constructor(string, length) {
        this.string = string;
        this.length = length;
    }

    increase(length) {
        return this.length += length;
    }

    decrease(length) {
        return this.length = Math.max(0, this.length - length);
    }

    toString() {
        return this.string.length > this.length ? this.string.slice(0, this.length) + '...' : this.string;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test 

test.decrease(3);
console.log(test.toString()); // Te... 

test.decrease(5);
console.log(test.toString()); // ... 

test.increase(4);
console.log(test.toString()); // Test