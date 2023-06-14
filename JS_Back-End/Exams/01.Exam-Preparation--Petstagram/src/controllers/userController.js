const router = require('express').Router();

const userService = require('../services/userService');
const { TOKEN_KEY } = require('../config/config');
const { extractErrorMessage } = require('../utils/errorHelpers');

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    try {
        await userService.register({ username, email, password, repeatPassword });

        res.redirect('/users/login');
    } catch (err) {
        res.render('users/register', { error: extractErrorMessage(err) });
    }
});

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const token = await userService.login(username, password);

        res.cookie(TOKEN_KEY, token);

        res.redirect('/');
    } catch (err) {
        res.render('users/login', { error: extractErrorMessage(err) });
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie('token');

    res.redirect('/');
})

module.exports = router;