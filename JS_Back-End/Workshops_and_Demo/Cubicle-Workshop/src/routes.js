const router = require('express').Router();

const cubeController = require('./controllers/cubeController');
const createController =require('./controllers/createController');

router.use(cubeController);
router.use(createController);
router.use('*', (req, res) => {
    res.render('404');
});

module.exports = router;