function heroicInventory(input) {

    'use strict';
    const result = [];

    for (const current of input) {
        const register = {};
        let [name, level, items] = current.split(' / ');
        if (items != undefined) {
            items = items.split(', ');
        } else {
            items = [];
        }
        register.name = name;
        register.level = +level;
        register.items = items;
        result.push(register);
    }

    const jsonString = JSON.stringify(result);
    console.log(jsonString);
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);