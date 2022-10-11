const { expect } = require('chai');
const { sum } = require('./04.sumOfNumbers');

describe('sum', () => {

    it('should take an array as an argument', () => {
        const argument = [1, 2];
        expect(Array.isArray(argument)).to.equal(true);
    });

    it('should return the sum of the values of all elements', () => {
        expect(sum([1, 2, 3])).to.equal(6);
        expect(sum([-1, -2, -3])).to.equal(-6);
        expect(sum([1, -2, 3])).to.equal(2);
        expect(sum([1, '2', 3])).to.equal(6);
        expect(sum([-1, '2', 3])).to.equal(4);
    });

    it('return NaN for contains invalid data', () => {
        expect(sum(['a', 'b', 'c'])).to.be.NaN;
    });

    it('return zero if array length is zero', () => {
        expect(sum([])).to.equal(0);
    });
});