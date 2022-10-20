const { expect } = require('chai');
const { rentCar } = require('./03.rentCar');

describe('Tests rent car functionality', () => {

    describe('Tests searchCar functionality', () => {
        it('throw an error for invalid input', () => {
            expect(() => { rentCar.searchCar('brbr', 'BMW') }).to.throw();
            expect(() => { rentCar.searchCar([], 1) }).to.throw();
            expect(() => { rentCar.searchCar('brbr', []) }).to.throw();
            expect(() => { rentCar.searchCar({}, 'drdr') }).to.throw();
        });

        it('throw an error if there are no matching elements', () => {
            expect(() => { rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'blabla') }).to.throw();
        });

        it('return number of matching elements and the model', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'BMW')).to.equal(`There is 1 car of model BMW in the catalog!`);
        });
    });

    describe('Tests calculatePriceOfCar functionality', () => {
        it('throw an error for invalid input', () => {
            expect(() => { rentCar.calculatePriceOfCar(1, 'brbr') }).to.throw();
            expect(() => { rentCar.calculatePriceOfCar(1, 1) }).to.throw();
            expect(() => { rentCar.calculatePriceOfCar('brbr', '1') }).to.throw();
            expect(() => { rentCar.calculatePriceOfCar(['brbr'], [1]) }).to.throw();
            expect(() => { rentCar.calculatePriceOfCar('brbr', true) }).to.throw();
            expect(() => { rentCar.calculatePriceOfCar({}, 1) }).to.throw();
        });

        it('return the model and the price it will cost for renting a car for the given days', () => {
            expect(rentCar.calculatePriceOfCar('BMW', 1)).to.equal(`You choose BMW and it will cost $45!`);
            expect(rentCar.calculatePriceOfCar('Toyota', 10)).to.equal(`You choose Toyota and it will cost $400!`);
        });

        it('throw an error if there are no matching elements', () => {
            expect(() => { rentCar.calculatePriceOfCar('blabla', 1) }).to.throw();
            expect(() => { rentCar.calculatePriceOfCar('', 1) }).to.throw();
        });
    });

    describe('Tests checkBudget functionality', () => {
        it('throw an error for invalid input', () => {
            expect(() => { rentCar.checkBudget(1, 'brbr', 1) }).to.throw();
            expect(() => { rentCar.checkBudget('brbr', 1, 1) }).to.throw();
            expect(() => { rentCar.checkBudget(1, 1, 'brbr') }).to.throw();
            expect(() => { rentCar.checkBudget([1], 'brbr', true) }).to.throw();
        });

        it('return "You rent a car!" if budget is bigger or equal to cost', () => {
            expect(rentCar.checkBudget(45, 1, 45)).to.equal(`You rent a car!`);
            expect(rentCar.checkBudget(45, 1, 100)).to.equal(`You rent a car!`);
        });

        it('return "You need a bigger budget!" if the budget is less than cost', () => {
            expect(rentCar.checkBudget(45, 1, 40)).to.equal(`You need a bigger budget!`);
            expect(rentCar.checkBudget(45, 1, 20)).to.equal(`You need a bigger budget!`);
        });
    });
});