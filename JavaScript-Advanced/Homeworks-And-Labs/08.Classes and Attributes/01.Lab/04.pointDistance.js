class Point {

    'use strict';
    static distance(first, second) {
        return Math.sqrt(Math.pow((second.x - first.x), 2) + Math.pow((second.y - first.y), 2));
    }

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));