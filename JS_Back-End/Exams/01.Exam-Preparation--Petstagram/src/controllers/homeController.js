const router = require('express').Router();

const photoService = require('../services/photoService');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/profile', async (req, res) => {
    const userId = req.user._id;
    const photos = await photoService.getAllPhotosByOwner(userId).lean();

    res.render('profile', { photos, photoCount: photoService.length });
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;