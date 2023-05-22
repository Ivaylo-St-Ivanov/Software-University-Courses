const router = require('express').Router();

const { addCat } = require('../services/catService');

router.get('/add-breed', (req, res) => {
    res.render('addBreed');
});

router.get('/add-cat', (req, res) => {
    res. render('addCat');
});


router.post('/add-cat', async (req, res, next) => {
    try {
        await addCat(req.body);
    } catch (err) {
        next(err);
    }
    res.redirect('/');
});

module.exports = router;