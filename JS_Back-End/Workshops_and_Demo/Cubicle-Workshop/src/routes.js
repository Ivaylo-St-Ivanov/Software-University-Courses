const router = require('express').Router();

const cubeController = require('./controllers/cubeController');
const createController =require('./controllers/createController');
const accessoryController = require('./controllers/accessoryController');

router.use(cubeController);
router.use(createController);
router.use('/accessories', accessoryController);
router.use('*', (req, res) => {
    res.render('404');
});

module.exports = router;