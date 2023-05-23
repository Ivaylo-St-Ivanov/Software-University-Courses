const { getCatById, deleteCatById } = require('../services/catService');

const router = require('express').Router();

router.get('/delete/:catId', (req, res) => {
    const id = req.params.catId;
    const cat = getCatById(id);

    res.render('catShelter', cat);
});

router.post('/delete/:catId', async (req, res) => {
    const id = req.params.catId;

    await deleteCatById(id);

    res.redirect('/');
});

module.exports = router;