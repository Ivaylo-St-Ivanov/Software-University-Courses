"use strict";
class City {
    constructor(name, population, treasury) {
        this.name = name;
        this.population = population;
        this.treasury = treasury;
        this.taxRate = 10;
    }
    collectTaxes() {
        this.treasury += Math.floor(this.population * this.taxRate);
    }
    applyGrowth(percentage) {
        this.population += Math.floor(this.population * (percentage / 100));
    }
    applyRecession(percentage) {
        this.treasury -= Math.floor(this.treasury * (percentage / 100));
    }
}
function cityTaxes(city, population, treasury) {
    return new City(city, population, treasury);
    // const cityObj = new City(city, population, treasury);
    // return {
    //     name: cityObj.name,
    //     population: cityObj.population,
    //     treasury: cityObj.treasury,
    //     taxRate: cityObj.taxRate,
    //     collectTaxes: () => cityObj.collectTaxes(),
    //     applyGrowth: (percentage: number) => cityObj.applyGrowth(percentage),
    //     applyRecession: (percentage: number) => cityObj.applyRecession(percentage),
    // };
}
const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
