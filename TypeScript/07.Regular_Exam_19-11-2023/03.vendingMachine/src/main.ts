import { Drink } from "./Drink";
import { VendingMachine } from "./VendingMachine";

function main() {
    const vendingMachine = new VendingMachine(6);

    const tea = new Drink("Tea", 1.5, 300); 
    const coffee = new Drink("Coffee", 2.0, 120); 
    const hotChocolate = new Drink("Hot Chocolate", 2.5, 200); 
    const latte = new Drink("Latte", 3.5, 220); 
    const cappuccino = new Drink("Cappuccino", 2.8, 180); 
    const mocha = new Drink("Mocha", 2.1, 150); 
    const herbalTea = new Drink("Herbal Tea", 1.75, 300);

    console.log(vendingMachine.getCount);    // 0

    vendingMachine.addDrink(tea); 
    vendingMachine.addDrink(coffee); 
    vendingMachine.addDrink(hotChocolate); 
    vendingMachine.addDrink(latte); 
    vendingMachine.addDrink(cappuccino); 
    vendingMachine.addDrink(mocha);

    vendingMachine.addDrink(herbalTea);

    console.log(vendingMachine.getCount);     // 6

    console.log(vendingMachine.removeDrink("Herbal Tea"));    //false 
    console.log(vendingMachine.removeDrink("Tea"));          //true

    console.log(vendingMachine.getLongest());     //Name: Latte, Price: $3.5, Volume: 220 ml

    console.log(vendingMachine.getCheapest());    //Name: Coffee, Price: $2.0, Volume: 120 ml

    console.log(vendingMachine.buyDrink("Cappuccino"));    //Name: Cappuccino, Price: $2.8, Volume: 180 ml

    console.log(vendingMachine.report()); 
    //Drinks available: 
    //Name: Coffee, Price: $2.0, Volume: 120 ml 
    //Name: Hot Chocolate, Price: $2.5, Volume: 200 ml 
    //Name: Latte, Price: $3.5, Volume: 220 ml 
    //Name: Cappuccino, Price: $2.8, Volume: 180 ml 
    //Name: Mocha, Price: $2.1, Volume: 150 ml
}

main();
