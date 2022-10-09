function solution() {

    'use strict';
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let output;

    const actions = {
        restock: (param, quantity) => {
            const microelement = param;
            stock[microelement] += quantity;
            output = 'Success';
        },
        prepare: (param, quantity) => {
            const recipe = param;
            const elements = Object.entries(recipes[recipe]);
            const copyStock = JSON.parse(JSON.stringify(stock));
            
            for (const [ingredient, value] of elements) {
                if (stock[ingredient] < value * quantity) {
                    return output = `Error: not enough ${ingredient} in stock`;
                }
                copyStock[ingredient] -= value * quantity;
                output = 'Success';
            }
            stock = copyStock;
        },
        report: (param, quantity) => {
            output = `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
        }
    };

    return function manager(input) {
        let [command, param, quantity] = input.split(' ');
        quantity = Number(quantity);
        actions[command](param, quantity);

        return output;
    }
}

let manager = solution();
// console.log(manager("restock flavour 50")); // Success
// console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
// console.log(manager("restock carbohydrate 10")); // Success
// console.log(manager("restock flavour 10")); // Success
// console.log(manager("prepare apple 1")); // Success
// console.log(manager("restock fat 10")); // Success
// console.log(manager("prepare burger 1")); // Success
// console.log(manager("report")); // protein=0 carbohydrate=4 fat=3 flavour=55

console.log(manager("prepare turkey 1")); // Error: not enough protein in stock
console.log(manager("restock protein 10")); // Success
console.log(manager("prepare turkey 1")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("prepare turkey 1")); // Error: not enough fat in stock
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare turkey 1")); // Error: not enough flavour in stock
console.log(manager("restock flavour 10")); // Success
console.log(manager("prepare turkey 1")); // Success
console.log(manager("report")); // protein=0 carbohydrate=0 fat=0 flavour=0