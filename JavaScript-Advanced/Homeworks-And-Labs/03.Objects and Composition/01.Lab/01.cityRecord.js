function cityRecord(town, population, treasury) {

    'use strict';
    const city = {
        name: town,
        population: population,
        treasury: treasury
    };

    return city;
}
console.log(cityRecord('Santo Domingo',
    12000,
    23500));