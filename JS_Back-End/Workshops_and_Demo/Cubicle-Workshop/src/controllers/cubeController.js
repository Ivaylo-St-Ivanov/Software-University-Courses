const router = require('express').Router();

const { getAllCubes, getCubeById } = require('../services/cubeService');

router.get('/', async (req, res) => {
    const { search, from, to } = req.query;
    const data = await getAllCubes(search, from, to).lean();

    res.render('home', { data, search, from, to });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/details/:_id', async (req, res) => {
    const id = req.params._id;
    const cube = await getCubeById(id).lean();
    res.render('details', cube);
});

module.exports = router;