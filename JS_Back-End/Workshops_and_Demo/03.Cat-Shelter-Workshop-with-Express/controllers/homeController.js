const router = require('express').Router();

// const data = require('../util');

router.get('/', (req, res) => {
    res.render('home');
});

module.exports = router;