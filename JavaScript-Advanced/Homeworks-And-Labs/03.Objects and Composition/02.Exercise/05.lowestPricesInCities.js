function lowestPricesInCities(input) {

    'use strict';
    const storage = {};

    for (const current of input) {
        let [town, product, price] = current.split(' | ');
        price = +price;

        if (storage.hasOwnProperty(product)) {
            let lowestPrice = storage[product].price;
            if (lowestPrice > price) {
                storage[product] = { price, town };
            }
        } else {
            storage[product] = { price, town };
        }
    }

    for (let [product, object] of Object.entries(storage)) {
        console.log(`${product} -> ${object.price} (${object.town})`);
    }
}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);