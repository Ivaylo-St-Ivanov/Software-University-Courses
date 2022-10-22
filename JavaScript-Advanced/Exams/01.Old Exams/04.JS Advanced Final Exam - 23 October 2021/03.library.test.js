const { expect } = require('chai');
const { library } = require('./03.library');

describe('Testing library functionality', () => {
    describe('testing calcPriceOfBook functionality', () => {
        it('throw an error for invalid input', () => {
            expect(() => { library.calcPriceOfBook(1, 'ab') }).to.throw();
            expect(() => { library.calcPriceOfBook('ab', []) }).to.throw();
            expect(() => { library.calcPriceOfBook(true, 1) }).to.throw();
        });

        it('return 50% discount if year is less or equal to 1980', () => {
            expect(library.calcPriceOfBook('ab', 1950)).to.equal(`Price of ab is ${20 * 0.5}.00`);
            expect(library.calcPriceOfBook('ab', 1980)).to.equal(`Price of ab is ${20 * 0.5}.00`);
        });

        it('return price', () => {
            expect(library.calcPriceOfBook('ab', 2000)).to.equal(`Price of ab is 20.00`);
            expect(library.calcPriceOfBook('ab', 1981)).to.equal(`Price of ab is 20.00`);
        });
    });

    describe('testing findBook functionality', () => {
        it('throw an error if the length of the booksArr array is zero', () => {
            expect(() => { library.findBook([], 'ab') }).to.throw();
        });
        
        it('return special message if the book is present in the array', () => {
            expect(library.findBook(['a', 'ab', 'c'], 'ab')).to.equal('We found the book you want.');
            expect(library.findBook(['a', 'ab', 'c'], 'c')).to.equal('We found the book you want.');
        });

        it('return special message if the book is not present in the array', () => {
            expect(library.findBook(['a', 'ab', 'c'], 'abcd')).to.equal('The book you are looking for is not here!');
            expect(library.findBook(['a', 'ab', 'c'], 'cba')).to.equal('The book you are looking for is not here!');
        });
    });

    describe('testing arrangeTheBooks functionality', () => {
        it('throw an error for invalid input', () => {
            expect(() => { library.arrangeTheBooks('1') }).to.throw();
            expect(() => { library.arrangeTheBooks(-1) }).to.throw();
        });
        
        it('return special message if space is enough', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.');
        });

        it('return special message if space is not enough', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
            expect(library.arrangeTheBooks(100)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});