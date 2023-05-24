const router = require('express').Router();

const { getAllCubes } = require('../services/cubeService');

const data = getAllCubes();

router.get('/', (req, res) => {
    res.render('home');
});

module.exports = router;