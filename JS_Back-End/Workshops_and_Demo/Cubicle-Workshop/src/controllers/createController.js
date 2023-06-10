const router = require('express').Router();

const { addCube } = require('../services/cubeService');

router.get('/create', (req, res) => {
    res.render('create');
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

module.exports = router;