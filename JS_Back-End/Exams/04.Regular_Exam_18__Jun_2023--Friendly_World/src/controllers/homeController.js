const router = require('express').Router();

const animalService = require('../services/animalService');

router.get('/', async (req, res) => {
    let animals = await animalService.getAllAnimals().lean();
    const lastThree = animals.splice(-3);
    
    res.render('home', { lastThree });
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;