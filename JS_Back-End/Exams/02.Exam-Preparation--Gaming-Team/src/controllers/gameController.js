const router = require('express').Router();

const gameService = require('../services/gameService');
const { extractErrorMessage } = require('../utils/errorHelpers');
const { isAuth } = require('../middlewares/authMiddleware');
const { getPlatformOptions } = require('../utils/viewHelpers');

router.get('/catalog', async (req, res) => {
    const games = await gameService.getAllGamesOffer().lean();
    res.render('games/catalog', { games });
});

router.get('/:gameId/details', async (req, res) => {
    const gameId = req.params.gameId;
    const game = await gameService.getGameById(gameId).populate('boughtBy.user').lean();
    const isOwner = req.user?._id == game.owner._id;
    const isBuyGame = Boolean(game.boughtBy?.find(x => x.user._id == req.user._id));

    res.render('games/details', { game, isOwner, isBuyGame });
});

router.get('/create', isAuth, (req, res) => {
    res.render('games/create');
});

router.post('/create', isAuth, async (req, res) => {
    const { platform, name, image, price, genre, description } = req.body;
    const owner = req.user._id;

    try {
        await gameService.addGameOffer({ platform, name, image, price, genre, description, owner });

        res.redirect('/games/catalog');
    } catch (err) {
        res.render('games/create', { error: extractErrorMessage(err), platform, name, image, price, genre, description });
    }
});

router.get('/:gameId/edit', isAuth, async (req, res) => {
    const gameId = req.params.gameId;

    try {
        const game = await gameService.getGameById(gameId).lean();
        const options = getPlatformOptions(game.platform);

        res.render('games/edit', { game, options });
    } catch (err) {
        res.render('games/edit', { error: extractErrorMessage(err) });
    }
});

router.post('/:gameId/edit', isAuth, async (req, res) => {
    const gameId = req.params.gameId;
    const gameData = req.body;

    try {
        await gameService.updateGame(gameId, gameData);

        res.redirect(`/games/${gameId}/details`);
    } catch (err) {
        res.render('games/edit', { error: 'Unable to update game!', ...gameData });
    }
});

router.get('/:gameId/delete', isAuth, async (req, res) => {
    const gameId = req.params.gameId;

    try {
        await gameService.deleteGameById(gameId);

        res.redirect('/games/catalog');
    } catch (err) {
        res.render('games/details', { error: 'Unsuccessful deletion!' });
    }
});

router.get('/:gameId/buy-game', async (req, res) => {
    const gameId = req.params.gameId;
    const user = req.user._id;

    await gameService.buyGame(gameId, { user });

    res.redirect(`/games/${gameId}/details`);
});

router.get('/search-page', async (req, res) => {
    const games = await gameService.getAllGamesOffer().lean();

    res.render('games/search', { games });
});

router.post('/search-page', async (req, res) => {
    const { name, platform } = req.body;

    let games = await gameService.getAllGamesOffer().lean();

    if (name) {
        games = games.filter(g => g.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
    }

    if (platform) {
        games = games.filter(g => g.platform == platform);
    }

    res.render('games/search', { games });
});

module.exports = router;