class Box<T> {
    private store: Array<T>;

    constructor() {
        this.store = [];
    }

    public add(el: T) {
        this.store.push(el);
    }

    public remove() {
        this.store.pop();
    }

    get count(): number {
        return this.store.length;
    }
}

let box = new Box<string>();
box.add('Pesho');
box.add('Gosho');
console.log(box.count);
box.remove();
console.log(box.count);
