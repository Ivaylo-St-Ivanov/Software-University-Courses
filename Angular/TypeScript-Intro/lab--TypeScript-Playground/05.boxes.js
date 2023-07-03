var Box = /** @class */ (function () {
    function Box() {
        this.store = [];
    }
    Box.prototype.add = function (el) {
        this.store.push(el);
    };
    Box.prototype.remove = function () {
        this.store.pop();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this.store.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
var box = new Box();
box.add('Pesho');
box.add('Gosho');
console.log(box.count);
box.remove();
console.log(box.count);
