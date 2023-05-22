const router = require('express').Router();

const { getAllCats, getCatById } =require('../services/catService');

const cats = getAllCats();

router.get('/', (req, res) => {
    res.render('home', {
        cats
    });
});

router.get('/cat/:catId', (req, res) => {
    const id = req.params.catId;
    const cat = getCatById(id);

    if (cat) {
        res.render('editCat', cat);
    } else {
        res.render('missingInfo',  { id });
    }
});

module.exports = router;