const { bookSelection } = require('./solution');
const { expect } = require('chai');

describe('Tests Book Selection', () => {

    it('Return special message if string is "Thriller" or "Horror" and age is less or equal to 12', () => {
        expect(bookSelection.isGenreSuitable('Thriller', 8)).to.equal(`Books with Thriller genre are not suitable for kids at 8 age`);
        expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
    });

    it('Return Those books are suitable if genre is another than "Thriller" or "Horror" and age is above the 12', () => {
        expect(bookSelection.isGenreSuitable('brbr', 13)).to.equal(`Those books are suitable`);
        expect(bookSelection.isGenreSuitable('Thriller', 20)).to.equal(`Those books are suitable`);
        expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal(`Those books are suitable`);
    });

    it('Throw an Error if the price or budget are not a number', () => {
        expect(() => bookSelection.isItAffordable('14', 15)).to.throw();
        expect(() => bookSelection.isItAffordable(14, '15')).to.throw();
        expect(() => bookSelection.isItAffordable('14', '15')).to.throw();
    });

    it('Return You don`t have enough money if budget is lower than price', () => {
        expect(bookSelection.isItAffordable(14, 10)).to.equal("You don't have enough money");
    });

    it('Return Book bought and left sum if budget is lower than price', () => {
        expect(bookSelection.isItAffordable(14, 20)).to.equal('Book bought. You have 6$ left');
        expect(bookSelection.isItAffordable(14, 14)).to.equal('Book bought. You have 0$ left');
    });

    it('Add the title if the genre is equal to wanted', () => {
        expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller')).to.deep.equal(['The Da Vinci Code']);
    });

    it('Return empty array if non-matched input', () => {
        expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'brbr')).to.deep.equal([]);
    });

    it('Throw an Error if the input is invalid', () => {
        expect(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], true)).to.throw;
        expect(() => bookSelection.suitableTitles('title: "The Da Vinci Code", genre: "Thriller"', 'Thriller')).to.throw;
    });
});