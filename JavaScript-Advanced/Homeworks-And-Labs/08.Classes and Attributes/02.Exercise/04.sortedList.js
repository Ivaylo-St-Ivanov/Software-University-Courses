'use strict';
class List {
    constructor(list, size) {
        this.list = [];
        this.size = this.list.length;
    }

    add(element) {
        this.list.push(Number(element));
        this.list.sort((a, b) => a - b);
        this.size = this.list.length;
    }

    remove(index) {
        if (index < 0 || index > this.list.length - 1) {
            throw new Error('The index is outside the length');
        }
        this.list.splice(index, 1);
        this.size = this.list.length;
    }

    get(index) {
        if (index < 0 || index > this.list.length - 1) {
            throw new Error('The index is outside the length');
        }
        return this.list[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));