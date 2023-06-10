const router = require('express').Router();

const { getAllCubes, getCubeById, attachAccessory } = require('../services/cubeService');
const { getAvailable } = require('../services/accessoryService');

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
    res.render('cube/details', cube);
});

router.get('/:cubeId/attach-accessory', async (req, res) => {
    const id = req.params.cubeId;
    const cube = await getCubeById(id).lean();
    const accessories = await getAvailable(cube.accessories).lean();
    const hasAccessories = accessories.length > 0;

    res.render('accessory/attach', { cube, accessories, hasAccessories });
});

router.post('/:cubeId/attach-accessory', async (req, res) => {
    const cubeId = req.params.cubeId;
    const { accessory: accessoryId } = req.body;

    await attachAccessory(cubeId, accessoryId);

    res.redirect(`/details/${cubeId}`);
});

module.exports = router;