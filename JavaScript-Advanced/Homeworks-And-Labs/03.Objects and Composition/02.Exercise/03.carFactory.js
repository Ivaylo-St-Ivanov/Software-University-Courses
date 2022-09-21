function carFactory(input) {

    'use strict';
    const smallEngine = { power: 90, volume: 1800 };
    const normalEngine = { power: 120, volume: 2400 };
    const monsterEngine = { power: 200, volume: 3500 };
    const car = {};

    car.model = input.model;

    if (input.power > 120) {
        car.engine = monsterEngine;
    } else if (input.power > 90) {
        car.engine = normalEngine;
    } else {
        car.engine = smallEngine;
    }

    car.carriage = { type: input.carriage, color: input.color };

    let wheelsize;
    if (input.wheelsize % 2 == 0) {
        wheelsize = Math.floor((input.wheelsize) - 1);
    } else {
        wheelsize = input.wheelsize;
    }
    car.wheels = new Array(4).fill(wheelsize);

    return car;
}
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));