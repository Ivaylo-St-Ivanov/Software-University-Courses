const router = require('express').Router();

const bookService = require('../services/bookService');
const { extractErrorMessage } = require('../utils/errorHelpers');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/catalog', async (req, res) => {
    const books = await bookService.getAllBooks().lean();

    res.render('books/catalog', { books });
});

router.get('/:bookId/details', async (req, res) => {
    const bookId = req.params.bookId;
    const book = await bookService.getBookById(bookId).lean();
    const isOwner = req.user?._id == book.owner._id;
    const isWish = Boolean(book.wishingList?.find(x => x._id == req.user?._id));

    res.render('books/details', { book, isOwner, isWish });
});

router.get('/create', isAuth, (req, res) => {
    res.render('books/create');
});

router.post('/create', isAuth, async (req, res) => {
    const { title, author, genre, stars, image, review } = req.body;
    const owner = req.user._id;

    try {
        await bookService.createBookReview({ title, author, genre, stars, image, review, owner });

        res.redirect('/books/catalog');
    } catch (err) {
        res.render('books/create', { error: extractErrorMessage(err), title, author, genre, stars, image, review });
    }
});

router.get('/:bookId/edit', isAuth, async (req, res) => {
    const bookId = req.params.bookId;
    const book = await bookService.getBookById(bookId).lean();

    res.render('books/edit', { book });
});

router.post('/:bookId/edit', isAuth, async (req, res) => {
    const bookId = req.params.bookId;
    const bookData = req.body;

    try {
        await bookService.editBook(bookId, bookData);

        res.redirect(`/books/${bookId}/details`);
    } catch (err) {
        res.render('books/edit', { error: extractErrorMessage(err) });
    }
});

router.get('/:bookId/delete', isAuth, async (req, res) => {
    const bookId = req.params.bookId;

    await bookService.deleteBook(bookId);

    res.redirect('/books/catalog');
});

router.get('/:bookId/wish', isAuth, async (req, res) => {
    const bookId = req.params.bookId;
    const userId = req.user._id;

    await bookService.wishBook(bookId, userId);

    res.redirect(`/books/${bookId}/details`);
});

module.exports = router;