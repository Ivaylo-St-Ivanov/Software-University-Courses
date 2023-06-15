const router = require('express').Router();

const photoService = require('../services/photoService');
const { extractErrorMessage } = require('../utils/errorHelpers');

router.get('/catalog', async (req, res) => {
    const photos = await photoService.getAllPhotos().lean();

    res.render('photos/catalog', { photos });
});

router.get('/:photoId/details', async (req, res) => {
    const photoId = req.params.photoId;
    const photo = await photoService.getPhotoById(photoId).populate('comments.user').lean();
    const isOwner = req.user?._id == photo.owner._id;

    res.render('photos/details', { photo, isOwner });
});

router.get('/create', (req, res) => {
    res.render('photos/create');
});

router.post('/create', async (req, res) => {
    const { name, age, description, location, image } = req.body;
    const owner = req.user._id;

    try {
        await photoService.create({ name, age, description, location, image, owner });

        res.redirect('/photos/catalog');
    } catch (err) {
        res.render('photos/create', { error: extractErrorMessage(err) });
    }
});

router.get('/:photoId/edit', async (req, res) => {
    const photoId = req.params.photoId;
    const photo = await photoService.getPhotoById(photoId).lean();

    res.render('photos/edit', { photo });
});

router.post('/:photoId/edit', async (req, res) => {
    const photoId = req.params.photoId;
    const photoData = req.body;

    try {
        await photoService.editPhoto(photoId, photoData);

        res.redirect(`/photos/${photoId}/details`);
    } catch (err) {
        res.render('photos/edit', { error: 'Unable to update photo!', ...photoData });
    }
});

router.get('/:photoId/delete', async (req, res) => {
    const photoId = req.params.photoId;

    try {
        await photoService.deletePhoto(photoId);

        res.redirect('/photos/catalog');
    } catch (err) {
        res.render('photos/details', { error: 'Unsuccessful photo deletion!' });
    }
});

router.post('/:photoId/comments', async (req, res) => {
    const photoId = req.params.photoId;
    const { message } = req.body;
    const user = req.user._id;

    await photoService.addComment(photoId, { user, message });

    res.redirect(`/photos/${photoId}/details`);
});

module.exports = router;