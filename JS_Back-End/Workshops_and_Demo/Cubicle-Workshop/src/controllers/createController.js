const router = require('express').Router();

const { addCube, getCubeById, deleteCube } = require('../services/cubeService');

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

router.get('/:cubeId/edit', async (req, res) => {
    const id = req.params.cubeId;
    const cube = await getCubeById(id);

    res.render('cube/edit', cube);
});

router.get('/:cubeId/delete', async (req, res) => {
    const id = req.params.cubeId;
    const cube = await getCubeById(id).lean();

    res.render('cube/delete', cube);
});

router.post('/:cubeId/delete', async (req, res) => {
    const id = req.params.cubeId;
    
    await deleteCube(id);

    res.redirect('/');
});

module.exports = router;