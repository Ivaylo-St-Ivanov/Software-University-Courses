const router = require('express').Router();

const animalService = require('../services/animalService');
const { extractErrorMessage } = require('../utils/errorHelpers');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/dashboard', async (req, res) => {
    const animals = await animalService.getAllAnimals().lean();

    res.render('animals/dashboard', { animals });
});

router.get('/:animalId/details', async (req, res) => {
    const animalId = req.params.animalId;
    const animal = await animalService.getAnimalById(animalId).lean();
    const isOwner = req.user?._id == animal.owner?._id;
    const isDonate = Boolean(animal.donations?.find(d => d._id == req.user?._id));

    res.render('animals/details', { animal, isOwner, isDonate });
});

router.get('/create', isAuth, (req, res) => {
    res.render('animals/create');
});

router.post('/create', isAuth, async (req, res) => {
    const { name, years, kind, image, need, location, description } = req.body;
    const owner = req.user._id;

    try {
        await animalService.addAnimal({ name, years, kind, image, need, location, description, owner });

        res.redirect('/animals/dashboard');
    } catch (err) {
        res.render('animals/create', { error: extractErrorMessage(err), name, years, kind, image, need, location, description });
    }
});

router.get('/:animalId/edit', isAuth, async (req, res) => {
    const animalId = req.params.animalId;
    const animal = await animalService.getAnimalById(animalId).lean();

    res.render('animals/edit', { animal });
});

router.post('/:animalId/edit', isAuth, async (req, res) => {
    const animalId = req.params.animalId;
    const animalData = req.body;

    try {
        await animalService.editAnimal(animalId, animalData);

        res.redirect(`/animals/${animalId}/details`);
    } catch (err) {
        const animal = { ...animalData };
        res.render('animals/edit', { error: extractErrorMessage(err), animal });
    }
});

router.get('/:animalId/delete', isAuth, async (req, res) => {
    const animalId = req.params.animalId;

    await animalService.deleteAnimal(animalId);

    res.redirect('/animals/dashboard');
});

router.get('/:animalId/donation', isAuth, async (req, res) => {
    const animalId = req.params.animalId;
    const userId = req.user._id;

    await animalService.donate(animalId, userId);

    res.redirect(`/animals/${animalId}/details`);
});

router.get('/search', async (req, res) => {
    const animals = await animalService.getAllAnimals().lean();

    res.render('animals/search', { animals });
});

router.post('/search', async (req, res) => {
    const { location } = req.body;

    let animals = await animalService.getAllAnimals().lean();

    if (location) {
        animals = animals.filter(a => a.location.toLocaleLowerCase().includes(location.toLocaleLowerCase()));
    }

    res.render('animals/search', { animals });
});

module.exports = router;