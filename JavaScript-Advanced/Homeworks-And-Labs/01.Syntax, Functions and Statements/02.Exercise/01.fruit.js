function fruit(type, grams, price) {

    'use strict';
    let weightInKilograms = grams / 1000;
    let sum = weightInKilograms * price;

    console.log(`I need $${sum.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${type}.`);
}
fruit('orange', 2500, 1.80);