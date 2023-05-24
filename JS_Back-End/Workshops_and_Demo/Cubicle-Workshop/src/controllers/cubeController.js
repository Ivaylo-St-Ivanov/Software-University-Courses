const router = require('express').Router();

const { getAllCubes, getCubeById } = require('../services/cubeService');

const data = getAllCubes();

router.get('/', (req, res) => {
    res.render('home', { data });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/details/:cubeId', (req, res) => {
    const id = req.params.cubeId;
    const cube = getCubeById(id);
    res.render('details', cube);
});

module.exports = router;