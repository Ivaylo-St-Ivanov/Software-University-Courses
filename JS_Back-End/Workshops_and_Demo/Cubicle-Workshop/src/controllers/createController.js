const router = require('express').Router();

const { addCube } = require('../services/cubeService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const { name, description, imageUrl, level } = req.body;

    addCube({
        name,
        description,
        imageUrl,
        level: Number(level)
    });

    res.redirect('/');
});

module.exports = router;