const router = require('express').Router();

const cryptoService = require('../services/cryptoService');
const { extractErrorMessage } = require('../utils/errorHelpers');
const { isAuth } = require('../middlewares/authMiddleware');
const { getPaymentOptions } = require('../utils/viewHelpers');

router.get('/catalog', async (req, res) => {
    const cryptos = await cryptoService.getAllCrypto().lean();

    res.render('crypto/catalog', { cryptos });
});

router.get('/:cryptoId/details', async (req, res) => {
    const cryptoId = req.params.cryptoId;
    const crypto = await cryptoService.getCryptoById(cryptoId).lean();
    const isOwner = req.user?._id == crypto.owner._id;
    const isBuy = Boolean(crypto.buyCrypto?.find(c => c._id == req.user?._id));

    res.render('crypto/details', { crypto, isOwner, isBuy });
});

router.get('/create', isAuth, (req, res) => {
    res.render('crypto/create');
});

router.post('/create', isAuth, async (req, res) => {
    const { name, image, price, description, payment } = req.body;

    try {
        const owner = req.user._id;

        await cryptoService.createCrypto({ name, image, price, description, payment, owner });

        res.redirect('/crypto/catalog');
    } catch (err) {
        res.render('crypto/create', { error: extractErrorMessage(err), name, image, price, description, payment });
    }
});

router.get('/:cryptoId/edit', isAuth, async (req, res) => {
    const cryptoId = req.params.cryptoId;
    const crypto = await cryptoService.getCryptoById(cryptoId).lean();
    const options = getPaymentOptions(crypto.payment);

    res.render('crypto/edit', { crypto, options });
});

router.post('/:cryptoId/edit', isAuth, async (req, res) => {
    const cryptoId = req.params.cryptoId;
    const cryptoData = req.body;

    try {
        await cryptoService.editCrypto(cryptoId, cryptoData);

        res.redirect(`/crypto/${cryptoId}/details`);
    } catch (err) {
        const crypto = { ...cryptoData };
        const options = getPaymentOptions(crypto.payment);
        res.render('crypto/edit', { error: extractErrorMessage(err), crypto, options });
    }
});

router.get('/:cryptoId/delete', isAuth, async (req, res) => {
    const cryptoId = req.params.cryptoId;

    await cryptoService.deleteCrypto(cryptoId);

    res.redirect('/crypto/catalog');
});

router.get('/:cryptoId/buy-crypto', isAuth, async (req, res) => {
    const cryptoId = req.params.cryptoId;
    const userId = req.user._id;

    await cryptoService.buyCrypto(cryptoId, userId);

    res.redirect(`/crypto/${cryptoId}/details`);
});

router.get('/search', async (req, res) => {
    const cryptos = await cryptoService.getAllCrypto().lean();

    res.render('crypto/search', { cryptos });
});

router.post('/search', async (req, res) => {
    const { name, payment } = req.body;

    let cryptos = await cryptoService.getAllCrypto().lean();

    if (name) {
        cryptos = cryptos.filter(c => c.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
    }

    if (payment) {
        cryptos = cryptos.filter(c => c.payment == payment);
    }

    res.render('crypto/search', { cryptos });
});

module.exports = router;