function townPopulation(input) {

    'use strict';
    const townInfo = {};

    for (const currentInfo of input) {
        let [town, population] = currentInfo.split(' <-> ');
        if (townInfo.hasOwnProperty(town)) {
            townInfo[town] += Number(population);
        } else {
            townInfo[town] = Number(population);
        }
    }

    for (const key in townInfo) {
        console.log(`${key} : ${townInfo[key]}`);
    }
}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);