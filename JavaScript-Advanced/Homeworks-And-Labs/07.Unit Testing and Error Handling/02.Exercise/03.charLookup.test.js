const { expect } = require('chai');
const { lookupChar } = require('./03.charLookup');

describe('Return char at a given index', () => {

    it('return undefined if the first param is not a string or the second is not a num', () => {
        expect(lookupChar(1, 1)).to.be.undefined;
        expect(lookupChar(true, 1)).to.be.undefined;
        expect(lookupChar([1], 1)).to.be.undefined;
        expect(lookupChar({}, 1)).to.be.undefined;
        expect(lookupChar('abc', '1')).to.be.undefined;
        expect(lookupChar('abc', [1])).to.be.undefined;
        expect(lookupChar('abc', true)).to.be.undefined;
        expect(lookupChar('abc', {})).to.be.undefined;
        expect(lookupChar('abc', 1.1)).to.undefined;
    });

    it('return incorrect index if the index is bigger than or equal to the string length or a negative', () => {
        expect(lookupChar('abc', 100)).to.equal('Incorrect index');
        expect(lookupChar('abc', 3)).to.equal('Incorrect index');
        expect(lookupChar('abc', -1)).to.equal('Incorrect index');
    });

    it('return char at at the specific index', () => {
        expect(lookupChar('Abc', 1)).to.equal('b');
        expect(lookupChar('Abc', 0)).to.equal('A');
    });
});