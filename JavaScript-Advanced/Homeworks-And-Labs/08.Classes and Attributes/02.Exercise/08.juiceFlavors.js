function juiceFlavors(juices) {

    'use strict';
    const store = {};
    const produced = {};

    for (const current of juices) {
        const [juice, quantity] = current.split(' => ');

        if (!store.hasOwnProperty(juice)) {
            store[juice] = 0;
        }
        store[juice] += Number(quantity);

        const currentJuiceQuantity = store[juice];
        if (currentJuiceQuantity >= 1000) {
            const bottles = Math.floor(currentJuiceQuantity / 1000);

            if (!produced.hasOwnProperty(juice)) {
                produced[juice] = 0;
            }
            produced[juice] += bottles;
            store[juice] = currentJuiceQuantity - bottles * 1000;
        }
    }

    for (const key in produced) {
        console.log(`${key} => ${produced[key]}`);
    }
}
juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

console.log('-----------------');

juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);