const router = require('express').Router();

const { getAllCubes, getCubeById } = require('../services/cubeService');

router.get('/', (req, res) => {
    const { search, from, to } = req.query;
    const data = getAllCubes(search, from, to);

    res.render('home', { data, search, from, to });
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