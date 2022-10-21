class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.');
        }

        this.books.push({ bookName, bookAuthor, payed: false });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        const book = this.books.find(x => x.bookName == bookName);

        if (!book) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (book.payed == true) {
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        const bookIndex = this.books.findIndex(x => x.bookName == bookName);
        const book = this.books[bookIndex];

        if (!book) {
            throw new Error(`The book, you're looking for, is not found.`);
        }
        if (book.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books.splice(bookIndex, 1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        let output;
        if (!bookAuthor) {
            output = [`The book collection has ${this.capacity - this.books.length} empty spots left.`];
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
                      .forEach(el => output.push(`${el.bookName} == ${el.bookAuthor} - ${el.payed == false ? 'Not Paid' : 'Has Paid'}.`));

            return output.join('\n');
        } else {
            const author = this.books.find(x => x.bookAuthor == bookAuthor);

            if (author) {
                return `${author.bookName} == ${bookAuthor} - ${author.payed == false ? 'Not Paid' : 'Has Paid'}.`;
            } else {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
        }
    }
}

const library = new LibraryCollection(5);
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());