const Book = require('../models/Book');

exports.getAllBooks = () => Book.find();

exports.getBookById = (bookId) => Book.findById(bookId);

exports.getMyWishBooks = (userId) => Book.find({ wishingList: userId });

exports.createBookReview = (bookData) => Book.create(bookData);

exports.editBook = (bookId, bookData) => Book.findByIdAndUpdate(bookId, bookData);

exports.deleteBook = (bookId) => Book.findByIdAndDelete(bookId);

exports.wishBook = async (bookId, userId) => {
    const book = await Book.findById(bookId);

    book.wishingList.push(userId);

    return book.save();
};