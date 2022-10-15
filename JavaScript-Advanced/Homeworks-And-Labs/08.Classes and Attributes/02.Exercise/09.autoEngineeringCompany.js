function autoEngineeringCompany(input) {

    'use strict';
    const storage = {};

    for (const current of input) {
        const [brand, model, producedCars] = current.split(' | ');

        if (!storage.hasOwnProperty(brand)) {
            storage[brand] = {};
        }
        if (!storage[brand].hasOwnProperty(model)) {
            storage[brand][model] = 0;
        }
        storage[brand][model] += Number(producedCars);
    }

    for (const brand in storage) {
        console.log(`${brand}`);

        for (const model in storage[brand]) {
            console.log(`###${model} -> ${storage[brand][model]}`);
        }
    }
}
autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);