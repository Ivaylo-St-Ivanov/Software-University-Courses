const { expect } = require('chai');
const mathEnforcer = require('./04.mathEnforcer');
const { addFive, subtractTen, sum } = require('./04.mathEnforcer');

describe('Math Enforcer Tests', () => {

    describe('Add Five Tests', () => {

        it('return undefined if param is not a num', () => {
            expect(mathEnforcer.addFive('1')).to.be.undefined;
            expect(mathEnforcer.addFive(true)).to.be.undefined;
            expect(mathEnforcer.addFive([1])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });

        it('add five to param and return the result', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
            expect(mathEnforcer.addFive(1.1)).to.equal(6.1);
            expect(mathEnforcer.addFive(-5.8)).to.closeTo(-0.8, 0.01);
            expect(mathEnforcer.addFive(-1)).to.equal(4);
        });
    });

    describe('Subtract Ten Tests', () => {

        it('return undefined if param is not a num', () => {
            expect(mathEnforcer.subtractTen('1')).to.be.undefined;
            expect(mathEnforcer.subtractTen(true)).to.be.undefined;
            expect(mathEnforcer.subtractTen([1])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });

        it('subtract ten from param and return the result', () => {
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
            expect(mathEnforcer.subtractTen(-1.1)).to.equal(-11.1);
            expect(mathEnforcer.subtractTen(10.1)).to.closeTo(0.1, 0.01);
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        });
    });

    describe('Sum Tests', () => {

        it('return undefined if any of the two params is not a num', () => {
            expect(mathEnforcer.sum('1', 2)).to.be.undefined;
            expect(mathEnforcer.sum(1, true)).to.be.undefined;
            expect(mathEnforcer.sum([1], '2')).to.be.undefined;
        });

        it('return the sum of the params', () => {
            expect(mathEnforcer.sum(1, 2)).to.equal(3);
            expect(mathEnforcer.sum(1.1, 2.2)).to.closeTo(3.3, 0.01);
            expect(mathEnforcer.sum(-1, -2)).to.equal(-3);
            expect(mathEnforcer.sum(-1.1, -2.2)).to.closeTo(-3.3, 0.01);
        });
    });
});