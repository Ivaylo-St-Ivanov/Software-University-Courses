function cats(input) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let catsArray = [];
    for (let current of input) {
        let currentCat = current.split(' ');
        let cat = new Cat(currentCat[0], currentCat[1]);
        catsArray.push(cat);
    }
    
    for (let cat of catsArray) {
        cat.meow();
    }
}
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);