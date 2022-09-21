function storeCatalogue(input) {

    'use strict';
    const catalogue = {};

    for (const current of input) {
        const [product, price] = current.split(' : ');
        catalogue[product] = price;
    }

    const sorted = Object.entries(catalogue).sort();
    let group = sorted[0][0][0];
    console.log(group);
    for (const [product, price] of sorted) {
        if (group == product[0]) {
            console.log(`  ${product}: ${price}`);
        } else {
            group = product[0];
            console.log(group);
            console.log(`  ${product}: ${price}`);
        }
    }
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);