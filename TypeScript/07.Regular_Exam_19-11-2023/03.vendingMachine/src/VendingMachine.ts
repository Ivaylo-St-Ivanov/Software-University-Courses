import { Drink } from "./Drink";

export class VendingMachine {
    buttonCapacity: number
    drinks: Drink[]

    constructor(buttonCapacity: number) {
        this.buttonCapacity = buttonCapacity
        this.drinks = []
    }

    get getCount(): number {
        return this.drinks.length;
    }

    addDrink(drink: Drink): void {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }

    removeDrink(name: string): boolean {
        const index = this.drinks.findIndex(x => x.name == name);

        if (index != -1) {
            this.drinks.splice(index, 1);
            return true;
        }

        return false;
    }

    getLongest(): string {
        const sortedDrinks: Drink[] = [...this.drinks].sort((a: Drink, b: Drink) => b.volume - a.volume);

        return sortedDrinks[0].toString();
    }

    getCheapest(): string {
        const sortedDrinks: Drink[] = [...this.drinks].sort((a: Drink, b: Drink) => a.price - b.price);

        return sortedDrinks[0].toString();
    }

    buyDrink(name: string): string | undefined {
        const drink = this.drinks.find(x => x.name == name);

        return drink?.toString();
    }

    report(): string {
        const drinksList = this.drinks.join('\n');

        return `Drinks available:\n${drinksList}`;
    }
}