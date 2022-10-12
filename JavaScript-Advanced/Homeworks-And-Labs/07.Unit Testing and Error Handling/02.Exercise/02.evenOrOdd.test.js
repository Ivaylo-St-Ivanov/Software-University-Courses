const { expect } = require('chai');
const { isOddOrEven } = require('./02.evenOrOdd');

describe('Even or Odd Length Tests', () => {

    it('return undefined for non-string params', () => {
        expect(isOddOrEven(1)).to.be.undefined; 
        expect(isOddOrEven([1])).to.be.undefined; 
        expect(isOddOrEven(true)).to.be.undefined; 
    });

    it('return even if string length is even', () => {
        expect(isOddOrEven('ab')).to.equal('even');
    });

    it('return odd if string length is odd', () => {
        expect(isOddOrEven('a')).to.equal('odd');
        expect(isOddOrEven('1')).to.equal('odd');
    });
});