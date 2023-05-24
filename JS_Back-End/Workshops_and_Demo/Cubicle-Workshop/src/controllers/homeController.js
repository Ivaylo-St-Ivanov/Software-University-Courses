const router = require('express').Router();

const { getAllCubes } = require('../services/cubeService');

const data = getAllCubes();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;