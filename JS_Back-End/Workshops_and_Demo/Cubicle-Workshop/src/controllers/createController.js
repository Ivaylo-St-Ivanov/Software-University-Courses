const router = require('express').Router();

const { addCube, getCubeById } = require('../services/cubeService');

router.get('/create', (req, res) => {
    res.render('cube/create');
});

router.post('/create', async (req, res) => {
    const { name, description, imageUrl, level } = req.body;

    await addCube({
        name,
        description,
        imageUrl,
        level: Number(level),
        owner: req.user._id
    });

    res.redirect('/');
});

router.get('/:cubeId/delete', async (req, res) => {
    const id = req.params.cubeId;

    const cube = await getCubeById(id);

    res.render('cube/delete', cube);
});

module.exports = router;