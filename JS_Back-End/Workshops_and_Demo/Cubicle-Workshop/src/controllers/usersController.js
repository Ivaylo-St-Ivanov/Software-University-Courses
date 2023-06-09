const router = require('express').Router();

const usersService = require('../services/usersService');

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    await usersService.register({ username, password, repeatPassword });

    res.redirect('/users/login');
});

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const token = await usersService.login(username, password);

    res.cookie('auth', token, { httpOnly: true });

    res.redirect('/');
});

module.exports = router;