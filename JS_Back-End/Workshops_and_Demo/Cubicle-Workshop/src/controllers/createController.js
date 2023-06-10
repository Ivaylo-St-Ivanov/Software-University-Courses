const router = require('express').Router();

const { addCube, getCubeById, editCube, deleteCube } = require('../services/cubeService');
const { getLevelOptions } = require('../utils/viewHelpers');

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
    const cube = await getCubeById(id).lean();
    const options = getLevelOptions(cube.level);

    res.render('cube/edit', { cube, options });
});

router.post('/:cubeId/edit', async (req, res) => {
    const id = req.params.cubeId;
    const cubeData = req.body;

    await editCube(id, cubeData);

    res.redirect(`/details/${id}`);
});

router.get('/:cubeId/delete', async (req, res) => {
    const id = req.params.cubeId;
    const cube = await getCubeById(id).lean();
    const options = getLevelOptions(cube.level);

    res.render('cube/delete', { cube, options });
});

router.post('/:cubeId/delete', async (req, res) => {
    const id = req.params.cubeId;

    await deleteCube(id);

    res.redirect('/');
});

module.exports = router;