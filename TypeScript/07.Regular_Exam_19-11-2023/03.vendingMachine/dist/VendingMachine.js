"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    get getCount() {
        return this.drinks.length;
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const index = this.drinks.findIndex(x => x.name == name);
        if (index != -1) {
            this.drinks.splice(index, 1);
            return true;
        }
        return false;
    }
    getLongest() {
        const sortedDrinks = [...this.drinks].sort((a, b) => b.volume - a.volume);
        return sortedDrinks[0].toString();
    }
    getCheapest() {
        const sortedDrinks = [...this.drinks].sort((a, b) => a.price - b.price);
        return sortedDrinks[0].toString();
    }
    buyDrink(name) {
        const drink = this.drinks.find(x => x.name == name);
        return drink?.toString();
    }
    report() {
        const drinksList = this.drinks.join('\n');
        return `Drinks available:\n${drinksList}`;
    }
}
exports.VendingMachine = VendingMachine;
