const { expect } = require('chai');
const { chooseYourCar } = require('./03.chooseYourCar');

describe('testing chooseYourCar functionality', () => {
    describe('testing choosingType functionality', () => {
        it('throw an error if the year is less than 1900 and the year is more than 2022', () => {
            expect(() => {chooseYourCar.choosingType('a', 'b', 1899)}).to.throw();
            expect(() => {chooseYourCar.choosingType('a', 'b', 2023)}).to.throw();
        });

        it('throw an error if the value of the string type is different from "Sedan"', () => {
            expect(() => {chooseYourCar.choosingType('x', 'b', 1920)}).to.throw();
            expect(() => {chooseYourCar.choosingType('y', 'b', 2020)}).to.throw();
        });

        it('return special message if the year of the car is greater or equal to 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'b', 2010)).to.equal('This b Sedan meets the requirements, that you have.');
            expect(chooseYourCar.choosingType('Sedan', 'b', 2011)).to.equal('This b Sedan meets the requirements, that you have.');
        });

        it('return special message if the year of the car is lower to 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'b', 2009)).to.equal('This Sedan is too old for you, especially with that b color.');
            expect(chooseYourCar.choosingType('Sedan', 'b', 2000)).to.equal('This Sedan is too old for you, especially with that b color.');
        });
    });

    describe('testing brandName functionality', () => {
        it('return an error for invalid input', () => {
            expect(() => {chooseYourCar.brandName('a, b, c', 0)}).to.throw();
            expect(() => {chooseYourCar.brandName(['a', 'b', 'c'], '1')}).to.throw();
            expect(() => {chooseYourCar.brandName('a, b, c', '1')}).to.throw();
        });

        it('remove an element (brand) from the array that is located on the index specified as a parameter', () => {
            expect(chooseYourCar.brandName(['a', 'b', 'c'], 0)).to.equal('b, c');
            expect(chooseYourCar.brandName(['a', 'b', 'c'], 2)).to.equal('a, b');
        });
    });

    describe('testing carFuelConsumption functionality', () => {
        it('return an error for invalid input', () => {
            expect(() => {chooseYourCar.carFuelConsumption(1, '1')}).to.throw();
            expect(() => {chooseYourCar.carFuelConsumption('1', 1)}).to.throw();
            expect(() => {chooseYourCar.carFuelConsumption('1', '1')}).to.throw();
            expect(() => {chooseYourCar.carFuelConsumption(-1, 1)}).to.throw();
            expect(() => {chooseYourCar.carFuelConsumption(1, -1)}).to.throw();
            expect(() => {chooseYourCar.carFuelConsumption(-1, -1)}).to.throw();
        });
        
        it('return special message if the liters/100km is less or equal to 7L', () => {
            expect(chooseYourCar.carFuelConsumption(100, 5)).to.equal('The car is efficient enough, it burns 5.00 liters/100 km.');
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
        });

        it('return special message if the liters/100km more than 7L', () => {
            expect(chooseYourCar.carFuelConsumption(100, 8)).to.equal('The car burns too much fuel - 8.00 liters!');
            expect(chooseYourCar.carFuelConsumption(100, 15)).to.equal('The car burns too much fuel - 15.00 liters!');
        });
    });
});